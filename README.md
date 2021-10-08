# Getting Started with react-http-lib

Wrapper to do HTTP API calls.\
Uses Axios internally to make requests. \
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

In the project directory, you can run:

### `npm install --save react-http-lib`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### How to use?

#### HTTP API call with method GET 

```
callGetApi: async () => {
            try {
                    const response = await httpService.get(endPoint, params, contentType, backendUrl, extraHeaders, responseType, withCredentials);
                    console.log(response);
                } catch (e) {
                    setResponse(undefined);
                    setError(e as any);
                    console.log('Http Error(from Storybook)', e);
                }
            }
       }
```
##### Refer storybook for more examples
