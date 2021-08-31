import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAZU2NPPHYD96gBcG5MaimICM5h49Ol-Eo",
  authDomain: "letmeask-bc195.firebaseapp.com",
  databaseURL: "https://letmeask-bc195-default-rtdb.firebaseio.com",
  projectId: "letmeask-bc195",
  storageBucket: "letmeask-bc195.appspot.com",
  messagingSenderId: "643449095127",
  appId: "1:643449095127:web:122d67e05bb3ed09e30192"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }