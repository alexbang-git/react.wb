import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_gnfZ0_DhaNci1GK98n7MJrREBOvfcnE",
  authDomain: "catch-ab.firebaseapp.com",
  databaseURL: "https://catch-ab-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
