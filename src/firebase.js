import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAvWRGO53GADcPAZvD7wKU-D1qJaqeBo-o",
  authDomain: "bt3103-week8-f683c.firebaseapp.com",
  databaseURL: "https://bt3103-week8-f683c.firebaseio.com",
  projectId: "bt3103-week8-f683c",
  storageBucket: "bt3103-week8-f683c.appspot.com",
  messagingSenderId: "1035290689658",
  appId: "1:1035290689658:web:83a0d046b6fabc8927bbc3",
  measurementId: "G-BP7ZG84BH0"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;