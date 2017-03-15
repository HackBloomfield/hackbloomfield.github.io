// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDlDzhHxOkpba6D1eZy5bhPRspXiv8X7vk",
    authDomain: "hackbloomfield-001.firebaseapp.com",
    databaseURL: "https://hackbloomfield-001.firebaseio.com",
    storageBucket: "hackbloomfield-001.appspot.com",
    messagingSenderId: "475566387283"
  };
  firebase.initializeApp(config);
  var provider = new firebase.auth.GoogleAuthProvider();
  var storageRef = firebase.storage().ref();
