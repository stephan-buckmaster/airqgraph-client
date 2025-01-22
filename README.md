# Air Quality Dashboard

This is a React.js application that connects to the [airqgraph server](https://github.com/stephan-buckmaster/airqgraph) to display current air quality data.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 23.3 is required. You can download it [here](https://nodejs.org/).
- **npm**: Node package manager, which comes with Node.js, is used to manage dependencies.

## Installation

1. **Clone the repository:**

```bash
   git clone <repository-url>
   cd <repository-directory>
```

Install dependencies:
Run the following command to install the necessary packages using npm:

```
npm install
```

This will install all needed packages specified in package.json, including the Apollo Client:

```
npm install @apollo/client
```

# Configuration:

Ensure that your GraphQL server endpoint is properly set up in your application. You may need to modify the configuration file located at src/config.js (or wherever your endpoint is specified).

Place the URL and descriptive location in the .env file, for example:

```
REACT_APP_AIRQGRAPH_SERVER_URL=http://localhost:5000/graphql
REACT_APP_LOCATION='Your descriptive place, Your city'
```

# Create a map file / background

Need to create a directory src/images (not included in this repository), and place a map.jpg image file in that directory.
# Running the Application
To start the React application, run the following command:

```
npm start
```

The application will be served at http://localhost:3000 by default, and you should be able to see the current air quality data on the dashboard, which connects to your configured GraphQL server.

# Technologies Used
* React.js: Frontend library for building the user interface.
* Apollo Client: For interfacing with the GraphQL server and managing application data.
* Node.js: As the backend runtime environment.
* airqgraph: server for air quality data

