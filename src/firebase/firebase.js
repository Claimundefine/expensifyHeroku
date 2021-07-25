import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDAta20GFg364sGG_GI2aLiyHAOooSKWys",
    authDomain: "expensify-e585e.firebaseapp.com",
    databaseURL: "https://expensify-e585e-default-rtdb.firebaseio.com",
    projectId: "expensify-e585e",
    storageBucket: "expensify-e585e.appspot.com",
    messagingSenderId: "399936223226",
    appId: "1:399936223226:web:6492fb3a42e3ee43461643",
    measurementId: "G-57YGCQ8P5K"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  database.ref().set({
      name: 'justin'
  }).then(() => {
      console.log("data is saved");
  }).catch((e) => {
      console.log("this failed", e);
  });