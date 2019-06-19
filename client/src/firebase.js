import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASEKEY,
    authDomain: process.env.REACT_APP_APPDOMAIN,
    databaseURL: process.env.REACT_APP_DBURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MSGSENDERID,
    appId: process.env.REACT_APP_APPID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  export {
      storage, firebase as default
  }
