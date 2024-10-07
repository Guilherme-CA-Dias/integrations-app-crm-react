// src/MyApp.js
import React, { useState } from 'react';
import {
  IntegrationAppProvider,
  useIntegrationApp,
} from '@integration-app/react';

export default function MyApp() {
  const token = process.env.REACT_APP_INTEGRATION_APP_TOKEN;

  return (
    <IntegrationAppProvider token={token}>
      <ContactForm />
    </IntegrationAppProvider>
  );
}

function ContactForm() {
  const integrationApp = useIntegrationApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [contactLink, setContactLink] = useState(''); // State to store the contact link

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await integrationApp
        .connection('pipedrive-oauth')
        .flow('create-contact')
        .run({
          input: {
            Name: name,
            Email: email,
            Phone: phone,
            Company: company,
          },
        });

      // Accessing the ID from the response structure
      const contactId = response.id; 

      const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      let data;
      const maxAttempts = 10;
      let attempt = 0;
      let contactOutputId = null;


      while (attempt < maxAttempts) {
        // Add a delay of 2 seconds (2000 milliseconds) before the next request
        await delay(2000);
  
        // Make a GET request to the specified endpoint to retrieve the contact ID
        const getResponse = await fetch(
          `https://api.integration.app/flow-runs/${contactId}/nodes/create-contact/runs`,
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_INTEGRATION_APP_TOKEN}`,
              'Content-Type': 'application/json',
            },
          }
        );
  
        data = await getResponse.json();
  
        // Check if data.items is populated and contains logs
        if (data.items && data.items.length > 0 && data.items[0].logs.length > 0) {
          const lastLogIndex = data.items[0].logs.length - 1; // Get the last index
          contactOutputId = data.items[0].logs[lastLogIndex].data.output.id; // Access the ID from the last log
          break; // Exit the loop if data is found
        }
  
        attempt++;
      }
  
      if (contactOutputId) {
        // Construct the contact URL using the retrieved ID
        const contactUrl = `https://gdlhm-sandbox.pipedrive.com/person/${contactOutputId}`;
        setContactLink(contactUrl); // Set the contact link
        alert(`Contact created successfully for ${name}. Check your CRM.`);
      } else {
        alert('Failed to retrieve contact information after multiple attempts.');
      }
  
      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
    } catch (error) {
      console.error('Error creating contact:', error);
      alert('Error creating contact: ' + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Company:
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create Contact</button>
      </form>
      {contactLink && (
        <p>
          Contact created successfully! View it{' '}
          <a href={contactLink} target="_blank" rel="noopener noreferrer">
            here
          </a>.
        </p>
      )}
    </div>
  );
}
