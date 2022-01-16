

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig ={
    apiKey: "AIzaSyAUi167sdoCo9nDLETen9VbZF8wWoTR_7I",
    authDomain: "kawaiistore-coderhouse.firebaseapp.com",
    projectId: "kawaiistore-coderhouse",
    storageBucket: "kawaiistore-coderhouse.appspot.com",
    messagingSenderId: "967572944465",
    appId: "1:967572944465:web:375a7cbc441cafb627aa70",
    measurementId: "G-QEY766JJY6"
}

const app =initializeApp(firebaseConfig);

export const db = getFirestore(app);