import firebase from "firebase"

const config = {
    apiKey: "AIzaSyAP3wfQxrWuybKwDdC9cGvvtYjBSev9z7Y",
    authDomain: "studycards-2758b.firebaseapp.com",
    databaseURL: "https://studycards-2758b.firebaseio.com",
    projectId: "studycards-2758b",
    storageBucket: "studycards-2758b.appspot.com",
    messagingSenderId: "613359598633"
  };
  const fire = firebase.initializeApp(config);
  
  export default fire