// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBlv8YwwrN5OOoBgXYVs_m-R4V6pHwoRjI",
    authDomain: "loginapp-e3a13.firebaseapp.com",
    databaseURL: "https://loginapp-e3a13.firebaseio.com",
    projectId: "loginapp-e3a13",
    storageBucket: "loginapp-e3a13.appspot.com", // para uso de firestore
    messagingSenderId: "349679518548"
  }
};
