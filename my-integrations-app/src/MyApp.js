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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await integrationApp
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

      alert(`Contact created successfully for ${name}. Check your CRM.`);
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
  );
}
