export const environment = {
  production: true,
  identityServer: {
    authority: 'https://identityserver-auth.azurewebsites.net',
    clientId: 'angular_spa',
    redirectUri: 'https://ambitious-beach-01ab44003.azurestaticapps.net/auth-callback',
    postLogoutRedirectUri: 'https://ambitious-beach-01ab44003.azurestaticapps.net/',
    responseType: 'id_token token',
    scope: 'openid profile email api.read',
    silentRedirectUri: 'https://ambitious-beach-01ab44003.azurestaticapps.net/silent-refresh.html',
    resourceApiUri: 'http://identityserver-resource.azurewebsites.net'
  }
};
