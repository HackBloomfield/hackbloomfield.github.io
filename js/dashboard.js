firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    $(".notLoggedIn").hide();
    $(".loggedIn").show();
    var currentUser = firebase.auth().currentUser.uid;
    console.log(currentUser);
    firebase.database().ref('applications/'+currentUser).once('value', function(snap){
      var appStatus = $("#appStatus");
      if(snap.val() != null){
        firebase.database().ref('appStatus/'+currentUser).on('value', function(snapshot){
          var val = snapshot.val();
          if(val == null){
            appStatus.text("Yet to be determined");
          }else if(val.accepted){
            appStatus.text("Accepted");
          }else if(val.accepted == false){
            appStatus.text("Waitlisted");
          }
        });
      }else{
        appStatus.text("You haven't applied yet!");
      }
    });
  }else{
    $(".loggedIn").hide();
    $(".notLoggedIn").show();
  }
});
