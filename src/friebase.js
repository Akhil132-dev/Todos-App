// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBOWyv2QnhAB4-XLt4jglih7UMlH6ZwqUg",
//     authDomain: "todo-app-ddbaf.firebaseapp.com",
//     databaseURL: "https://todo-app-ddbaf.firebaseio.com",
//     projectId: "todo-app-ddbaf",
//     storageBucket: "todo-app-ddbaf.appspot.com",
//     messagingSenderId: "18628289042",
//     appId: "1:18628289042:web:c5e9b360a24598e64faecb",
//     measurementId: "G-7S7SJSX0PJ"
//   };
//frist install firebase using
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBOWyv2QnhAB4-XLt4jglih7UMlH6ZwqUg",
  authDomain: "todo-app-ddbaf.firebaseapp.com",
  databaseURL: "https://todo-app-ddbaf.firebaseio.com",
  projectId: "todo-app-ddbaf",
  storageBucket: "todo-app-ddbaf.appspot.com",
  messagingSenderId: "18628289042",
  appId: "1:18628289042:web:c5e9b360a24598e64faecb",
  measurementId: "G-7S7SJSX0PJ",
});

const db = firebaseApp.firestore();

export default db//this will help you to import everywhere  in the project for use 
