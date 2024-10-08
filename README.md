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
   Dependencies list
{
  "name": "my-integrations-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@integration-app/react": "^2.0.2",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "dotenv": "^16.4.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "^5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

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
