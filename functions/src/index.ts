import * as functions from 'firebase-functions';
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
import crawler1 from './crawler1/App'

admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
 export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

 export const crawler = functions.https.onRequest(crawler1)