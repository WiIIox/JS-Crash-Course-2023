# Simple Weather App

This is a simple weather application built using Node.js, Express.js, hbs, dotenv, ipinfo, and axios.

## Features

- Retrieves weather information based on user's IP address
- Displays weather data using hbs templates
- Error handling for failed requests or invalid responses

## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the dependencies:
```
npm install
```


## Configuration
1. Create a .env file in the project's root directory.
2. Add the following environment variables to the .env file:

```
API_KEY=YOUR_WEATHER_API_KEY
```

Replace YOUR_WEATHER_API_KEY with your API key obtained from the weather data provider.

## Usage
Start the application by running the following command:

```
npm start
```

Open your web browser and navigate to http://localhost:3000 to access the weather app.