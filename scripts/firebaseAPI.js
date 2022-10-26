//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBjAPpkOGyKFk4yfgg61HxLDNP2eQl10RE",
    authDomain: "dtc11-8eb98.firebaseapp.com",
    projectId: "dtc11-8eb98",
    storageBucket: "dtc11-8eb98.appspot.com",
    messagingSenderId: "891415667203",
    appId: "1:891415667203:web:0a798c20ea5975a0c96436"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();