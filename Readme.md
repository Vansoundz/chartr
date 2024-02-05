# ChartR Application

This document provides Instructions on how to run ChartR application in your local machine. The API(chartr.api) is a .NET 8 project and UI(chartr.ui) is an Angular 16 application.

## About ChartR

**ChartR** is a simple application that lists top charting songs.


### Prerequisites:
 - [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0, '.NET 8 SDK')
 - [Node.js and npm](https://nodejs.org/)

## Building and Running the API
0. Clone this repository.

1. Navigate to the API source directory:
    ```bash
    cd /chartr.api
    ```

2. Restore the .NET packages:
    ```bash
    dotnet restore
    ```

3. Build the API:
    ```bash
    dotnet build
    ```

4. Run the API:
    ```bash
    dotnet run
    ```

## Building and Running the Angular UI

1. Navigate to the UI directory:
    ```bash
    cd /chartr.ui
    ```


2. Install the required npm packages by running:
    ```bash
    npm install
    ```

3. Build and run the Angular app:
    ```bash
    npm start
    ```

The application should now be running locally. 
To view the UI, open a browser and navigate to `http://localhost:4200`.The API should be available at `https://localhost:7002`. To view the swagger documentation, enter the url `https://localhost:7002/swagger`

### Additional Notes:

If you encounter any issues, ensure you have the correct versions of .NET SDK and Node.js/npm installed, also refer to the official documentation for .NET 8 and Angular 16 for troubleshooting and advanced configuration.
