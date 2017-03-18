firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    $(".notLoggedIn").hide();
    $(".loggedIn").show();
    var currentUser = firebase.auth().currentUser.uid;
    console.log(currentUser);
    firebase.database().ref('appStatus/'+currentUser).on('value', function(snapshot){
      var val = snapshot.val();
      var appStatus = $("#appStatus");
      if(val.applied){
        if(val.accepted){
          appStatus.text("Accepted");
        }else if(val.accepted == false){
          appStatus.text("Waitlisted");
        }else if(val.accepted == null){
          appStatus.text("Yet to be determined");
        }
      }else if(!val.applied || val.applied == null){
        appStatus.text("You haven't applied yet!");
      }
    });
  }else{
    $(".loggedIn").hide();
    $(".notLoggedIn").show();
  }
});
