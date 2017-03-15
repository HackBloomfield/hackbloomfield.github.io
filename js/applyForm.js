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
var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    $(".notLoggedIn").hide();
    $(".loggedIn").show();

    $("#nameInput").val(firebase.auth().currentUser.displayName);
    $("#emailInput").val(firebase.auth().currentUser.email);
  }else{
    $(".loggedIn").hide();
    $(".notLoggedIn").show();
  }
});
$("#otherSchool")
  .keyup(function(){
    $("#otherSchoolButton").attr("value", $("#otherSchool").val())
  })
$("#applyForm")
  .submit(function(e){
    e.preventDefault();
    var resume = $("#resumeUpload")[0].files[0];
    storageRef.child("resumes/" + UUIDv4() + ".pdf").put(resume).then(function(snapshot){
      var formDataArray = $("#applyForm").serializeArray();
      function objectifyForm(formArray){returnArray={};for(var i=0;i<formArray.length;i++){returnArray[formArray[i]['name']]=formArray[i]['value'];}returnArray.resume = snapshot.a.downloadURLs[0]; return returnArray;}
      firebase.database().ref('applications/' + firebase.auth().currentUser.uid).set(objectifyForm(formDataArray));
    });
  });
