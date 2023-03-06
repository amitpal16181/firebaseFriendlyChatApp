/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyCkz-U5xaaja8tEVKSj4FuL-SpEdb6Zntw",
  authDomain: "friendlychat-2a356.firebaseapp.com",
  projectId: "friendlychat-2a356",
  storageBucket: "friendlychat-2a356.appspot.com",
  messagingSenderId: "295969562906",
  appId: "1:295969562906:web:084044fd5db0cdbee9cca3"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}