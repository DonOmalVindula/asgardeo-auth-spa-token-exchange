# Asgardeo Auth SPA Token Exchange Usage Example (Single Page Application)

This sample is developed to demonstrate the basic usage of the Asgardeo Auth SPA Token Exchange.

## Getting Started

### Register an Application

Follow the instructions in the [Try Out the Sample Apps](../../README.md#try-out-the-sample-apps) section to register an application.

Make sure to add `https://localhost:3000` as a Redirect URL and also add it under allowed origins. 

### Download the Sample

Download the sample from [here](https://github.com/asgardeo/asgardeo-auth-spa-token-exchange/releases/latest/download/choreo-token-exchange-react-app.zip) and extract the zip file.

### Configure the Sample

Update configuration file `src/config.json` with your registered app details.

Add Choreo API endpoint under `API_ENDPOINT` property under `src/pages/home.tsx`.

**Note:** You will only have to paste in the `client ID` generated for the application you registered.

Read more about the SDK configurations [here](../../README.md#authprovider).

```json
{
    "clientID": "<ADD_CLIENT_ID_HERE>",
    "baseUrl": "https://api.asgardeo.io/t/<org_name>",
    "signInRedirectURL": "https://localhost:3000",
    "signOutRedirectURL": "https://localhost:3000",
    "scope": ["openid","email","profile"],
    "stsConfig": {
        "client_id": "<ADD_CHOREO_CONSUMER_KEY_HERE>",
        "orgHandle": "<ADD_CHOREO_ORG_HERE>",
        "scope": []
    },
    "stsTokenEndpoint": "<CHOREO_TOKEN_ENDPOINT_URL>",
    "resourceServerURLs": "<ADD_API_ENDPOINT_BASE_URL>",
}
```

### Run the Application

```bash
npm install && npm start
```
The app should open at [`https://localhost:3000`](https://localhost:3000)

## Contribute

Please read [Contributing to the Code Base](http://wso2.github.io/) for details on our code of conduct, and the process for submitting pull requests to us.

### Reporting Issues

We encourage you to report issues, improvements, and feature requests creating [Github Issues](https://github.com/asgardeo/asgardeo-auth-spa-token-exchange/issues).

Important: Please be advised that security issues must be reported to security@wso2com, not as GitHub issues, in order to reach the proper audience. We strongly advise following the WSO2 Security Vulnerability Reporting Guidelines when reporting the security issues.

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](../../LICENSE) file for details.
