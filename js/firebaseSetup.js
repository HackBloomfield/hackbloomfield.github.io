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
  $("#loginButton")
    .click(function(){
      firebase.auth().signInWithRedirect(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    });
