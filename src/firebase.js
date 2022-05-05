import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBo32rTZCIfOZfOlEw8qwy_gxLOyC5n-Zo",
    authDomain: "discord-clone-redux-c2879.firebaseapp.com",
    projectId: "discord-clone-redux-c2879",
    storageBucket: "discord-clone-redux-c2879.appspot.com",
    messagingSenderId: "1091286548289",
    appId: "1:1091286548289:web:19b6379779f09a7aee6bc0"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();
export{auth,provider};
export default db;