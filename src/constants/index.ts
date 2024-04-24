
export const LOCALHOST = 'localhost';
export const PUBLICHOST ='65.0.32.143';

export const HOST = PUBLICHOST;

export const API_BASE_URL = `http://${HOST}:8080/igenieadmin`;
export const ACCESS_TOKEN = 'accessToken';


export const OAUTH2_REDIRECT_URI = `http://${HOST}:3000/login/oauth2/code/google`;

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;

export const DEV_API = `http://${HOST}:8080/igenieadmin`;
