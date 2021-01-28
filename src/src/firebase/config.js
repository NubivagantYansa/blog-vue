import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: "blog-vue-ffd4e.firebaseapp.com",
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: "blog-vue-ffd4e.appspot.com",
  messagingSenderId: process.env.VUE_APP_MESS_SENDER_ID,
  appId: process.env.VUE_APP_APPID,
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

// export firestore
export { projectFirestore };
