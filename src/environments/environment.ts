// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  identityServer: {
    authority: 'https://identityserver-auth.azurewebsites.net',
    clientId: 'angular_spa',
    redirectUri: 'https://ambitious-beach-01ab44003.azurestaticapps.net/auth-callback',
    postLogoutRedirectUri: 'https://ambitious-beach-01ab44003.azurestaticapps.net/',
    responseType: 'id_token token',
    scope: 'openid profile email api.read',
    silentRedirectUri: 'https://ambitious-beach-01ab44003.azurestaticapps.net/silent-refresh.html'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
