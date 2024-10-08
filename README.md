# Integrations App CRM React - Interview Submission

This React application was built as part of an interview assignment for Integration.app. It integrates with Pipedrive using the `@integration-app/react` library to create contacts. The app demonstrates a simple contact creation flow, covering fields such as Name, Email, Phone, Company Name, and Pronouns.

## Prerequisites

- Node.js (v14 or later)
- npm (included with Node.js)

## Installation

1. Clone the repository:
   - `git clone https://github.com/Guilherme-CA-Dias/integrations-app-crm-react.git`
   - `cd integrations-app-crm-react`

2. Install the dependencies:
   - `npm install`

## Configuration

To configure the application, create a `.env` file in the root directory and include your Integration App token:

REACT_APP_INTEGRATION_APP_TOKEN=your-token-here


Replace `your-token-here` with your actual Integration App token.

## Running the Application

To start the app, run the following command:
- `npm start`

This will launch the app at `http://localhost:3000` in your browser.

## Usage

1. Navigate to `http://localhost:3000`.
2. Fill out the form with the contact details (Name, Email, Phone, Company Name, and Pronouns).
3. Click "Create Contact."
4. A confirmation message with a CRM link will appear upon successful creation, or an error message if the process fails.
