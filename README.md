
# Widget Installation and Running Instructions

## Installation

To run this widget, please follow these steps to install dependencies:

1. Navigate to the `backend` directory:
    ```
    cd backend && npm install
    ```

2. Navigate to the `browser-app` directory:
    ```
    cd browser-app && npm install
    ```

3. Navigate to the `electron-app` directory:
    ```
    cd electron-app && npm install
    ```

4. Navigate to the `testwidget` directory:
    ```
    cd testwidget && npm install
    ```

## Running

Once the dependencies are installed, follow these instructions to run the backend and the widget:

### Running the Backend

To run the backend server, execute the following command:

```
cd backend && npm run server
```


### Running the Widget

To run the widget, execute the following command:

```
npm run start:browser
```


### Updating Changes in Browser

If you want to update your changes in the browser, follow these steps:

1. Open a new terminal window.

2. Navigate to the widget directory.

3. Run the following command to watch for changes and update the browser:
   
```
npm run watch:browser
```

This will enable you to detect your changes reflected  in the browser.