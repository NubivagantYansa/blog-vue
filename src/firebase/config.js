import firebase from "firebase/app";
import "firebase/firestone";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: "blog-vue-ffd4e.firebaseapp.com",
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: "blog-vue-ffd4e.appspot.com",
  messagingSenderId: process.env.VUE_APP_MESS_SENDER_ID,
  appId: process.env.VUE_APP_APPID,
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Init Firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
