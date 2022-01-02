import firebase from 'firebase';

// add SDK Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqKxZ0MokM1yRj9XDxY9hxpOhE5Xu775s",
  authDomain: "project-67-f5e67.firebaseapp.com",
  projectId: "project-67-f5e67",
  storageBucket: "project-67-f5e67.appspot.com",
  messagingSenderId: "854879089957",
  appId: "1:854879089957:web:67d5afe945c04f973e96cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var firebaseConfig = {
    

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();