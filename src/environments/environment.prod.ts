export const environment = {
  production: true,
  identityServer: {
    authority: 'https://identityserver-auth.azurewebsites.net',
    clientId: 'angular_spa',
    redirectUri: 'https://identityserverspa.z33.web.core.windows.net/auth-callback',
    postLogoutRedirectUri: 'https://identityserverspa.z33.web.core.windows.net/',
    responseType: 'id_token token',
    scope: 'openid profile email api.read',
    silentRedirectUri: 'https://identityserverspa.z33.web.core.windows.net/silent-refresh.html',
    resourceApiUri: 'http://identityserver-resource.azurewebsites.net'
  }
};
