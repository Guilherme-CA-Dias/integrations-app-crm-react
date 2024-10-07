# integrations-app-crm-react


# My Integration App

This is a simple React application that integrates with Pipedrive using the `@integration-app/react` library to create contacts.

## Prerequisites

- Node.js (v14 or later)
- npm (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/my-integration-app.git
   cd my-integration-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root of your project and add your Integration App token:

```env
REACT_APP_INTEGRATION_APP_TOKEN=your-token-here
```

Replace `your-token-here` with your actual Integration App token.

## Running the Application

Start the application:

```bash
npm start
```

This will launch the app in your browser at `http://localhost:3000`.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Fill out the form with the contact's Name, Email, Phone, and Company.
3. Click the "Create Contact" button.
4. If successful, you will see an alert confirming the contact was created. If there's an error, an alert will display the error message.
