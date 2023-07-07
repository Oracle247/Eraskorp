// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA_RWmWVRuQC-785kQ40sEdwNnz6Yb6sBM",
  authDomain: "brilliant-brains-7e04f.firebaseapp.com",
  projectId: "brilliant-brains-7e04f",
  storageBucket: "brilliant-brains-7e04f.appspot.com",
  messagingSenderId: "838066145252",
  appId: "1:838066145252:web:503b26af450ef5b3dd69f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export default storage;
