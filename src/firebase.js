// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqzTrqm61nw8qZI4_-xfNOp_Y5Xzzn_zY",
  authDomain: "instagram-clone-33b51.firebaseapp.com",
  databaseURL: "https://instagram-clone-33b51-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "instagram-clone-33b51",
  storageBucket: "instagram-clone-33b51.appspot.com",
  messagingSenderId: "540953501813",
  appId: "1:540953501813:web:d5575aea2b31a8ddd2d83c",
  measurementId: "G-BQCSYP33HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
export {auth}
