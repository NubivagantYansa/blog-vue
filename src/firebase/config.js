import firebase from "firebase/app";
import "firebase/firestone";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: "blog-vue-ffd4e.firebaseapp.com",
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: "blog-vue-ffd4e.appspot.com",
  messagingSenderId: "5454428996",
  appId: "1:5454428996:web:3a1b77cab7e5ded8f03511",
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Init Firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
