import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAngcukdtm3BAsbPp5Mm2LQlFY28k5yJWg",
  authDomain: "netflix-clone-46d37.firebaseapp.com",
  projectId: "netflix-clone-46d37",
  storageBucket: "netflix-clone-46d37.appspot.com",
  messagingSenderId: "205300254761",
  appId: "1:205300254761:web:b0ad95e34a9340c8dcb438"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
