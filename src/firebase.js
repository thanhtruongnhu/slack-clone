import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdaX1S1IuuSMNjEqRLSDx3P54Xx2Ww9YM",
    authDomain: "slack-clone-7ea4d.firebaseapp.com",
    databaseURL: "https://slack-clone-7ea4d-default-rtdb.firebaseio.com",
    projectId: "slack-clone-7ea4d",
    storageBucket: "slack-clone-7ea4d.appspot.com",
    messagingSenderId: "188312292628",
    appId: "1:188312292628:web:7bb4d5e85c518a979d4601",
    measurementId: "G-0RH158G7HD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) //Run app on firebase
  const db = firebaseApp.firestore() //run the dB
  const auth= firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider};
  export default db;