import firebase from "firebase/app";

  const firebaseConfig = {
    apiKey: "AIzaSyCRGshne368uORhEgoF48_V4dOrq8xfdwk",
    authDomain: "watermeter-fd8ec.firebaseapp.com",
    databaseURL: "https://watermeter-fd8ec.firebaseio.com",
    projectId: "watermeter-fd8ec",
    storageBucket: "watermeter-fd8ec.appspot.com",
    messagingSenderId: "392890094677",
    appId: "1:392890094677:web:57c01b865369a59775f0dc",

    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STOREAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);  
