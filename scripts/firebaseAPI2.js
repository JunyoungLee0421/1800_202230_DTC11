//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyDbAR1MzyDzgNV7sM4HBxmv9N8JH-4wtp4",
    authDomain: "fir-fd901.firebaseapp.com",
    projectId: "fir-fd901",
    storageBucket: "fir-fd901.appspot.com",
    messagingSenderId: "1027197874303",
    appId: "1:1027197874303:web:2a4432046b61d4218dcf4a"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();