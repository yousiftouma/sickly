import * as msal from '@azure/msal-browser';

const baseUri = process.env.NODE_ENV === 'production' ? 'https://www.sickly.se' : 'https://localhost:3000';

const authConfig = {
    auth: {
        authority: 'https://login.microsoftonline.com/sickly.onmicrosoft.com',
        clientId: 'ec0a6477-7d55-4517-b0c9-04b3bf156b41',
        redirectUri: baseUri,
        postLogoutRedirectUri: baseUri,
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: true
    },
};

const AuthService = new msal.PublicClientApplication(authConfig);

AuthService.handleRedirectPromise().then((tokenResponse) => {
    console.log('redirect promise');
    console.log(tokenResponse);
    if (null !== tokenResponse) {
        // successful auth redirect
    } else {
        // not an auth redirect
    }
}).catch((error) => {
    console.log('error in redirect promise');
    console.log(error);
});

function login() {
    const request = {
        scopes: ['https://sickly.onmicrosoft.com/api/access_as_user'],
    };

    try {
        AuthService.loginRedirect(request);
    }
    catch (err) {
        console.log('error in login');
        console.log(err);
    }
};

function logout() {
    AuthService.logout();
};

function getToken() {
    if (AuthService.getAllAccounts() === null) {
        console.log('no accounts when getting token, returning');
        login();
        return;
    }
    console.log('there are accounts');
    console.log(AuthService.getAllAccounts());
    const request = {
        scopes: ['https://sickly.onmicrosoft.com/api/access_as_user'],
        account: AuthService.getAllAccounts()[0]
    };
    
    AuthService.acquireTokenSilent(request).then(tokenResponse => {
        console.log('aquired token:');
        console.log(tokenResponse);
        return tokenResponse.accessToken;
    }).catch(error => {
        console.log('error in getToken');
        console.log(error);
        return AuthService.acquireTokenRedirect(request).accessToken;
    });
};

export { login, logout, getToken };