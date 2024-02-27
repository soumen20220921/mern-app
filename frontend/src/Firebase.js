
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBPqrwew1C-YvMTZd0fHlxvjWjG8CLMEpE",
    authDomain: "login-page-98c52.firebaseapp.com",
    projectId: "login-page-98c52",
    storageBucket: "login-page-98c52.appspot.com",
    messagingSenderId: "173285588969",
    appId: "1:173285588969:web:4eb5cdcb1126a5a0771578"
};


const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth }
export const db = getFirestore(app);
export var storage = firebase.storage();
export default firebase