# Air Quality API - Paris

## Overview
This project provides a REST API to fetch air quality information based on GPS coordinates. It is built using TypeScript with Node.js and utilizes MongoDB for data storage.

## Prerequisites
Before you begin, ensure you have met the following requirements:

    Node.js (v16 or later)
    MongoDB installed and running locally or on a remote server

## Installation

Clone the Repository

```bash
git clone https://github.com/SpencerBenson/air-quality-api.git
cd air-quality-api
```

## Install Dependencies

```bash
npm install
```
## Setup Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

NB: for this project, I have included the .env file as it is a test. However, for security reasons, these file should never be included.

```bash
MONGODB_URI=mongodb://localhost:27017/air_quality
MONGODB_CONNECTION_NAME=airQualityDB
NEAREST_CITY_API=https://api.airvisual.com/v2/nearest_city
IQAIR_API_KEY=1fb8316e-8367-46ff-9d82-d5c49cd82667
PARIS_LATITUDE=48.856613
PARIS_LONGITUDE=2.352222
```

 Replace your-database-name with the name of your MongoDB database and your-iqair-api-key with your IQAir API key.

## Running the Application

   ### Start the Application

 Use nodemon to start the application in development mode:

```bash
 npm run dev
```
This will start the server and automatically restart it on file changes.

## Access the API

 The API will be available at http://localhost:3000.You can test the endpoints using tools like Postman or curl.


## Running Tests

### Run Unit and Integration Tests
 To execute the test cases:

```bash
npm test
```
This will run all the test suites that I have defined.It will also include the the test coverage report.

## Additional Notes
Ensure MongoDB is running before starting the application.
Adjust logging and configuration settings as needed in the src/config directory.

## MongoDB Screenshot 

![Data as seem on MongoDB Compass](https://github.com/spencerBenson/air-quality-api/blob/main/paris_air_quality_collection.png?raw=true)

## License

[MIT](https://choosealicense.com/licenses/mit/)