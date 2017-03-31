var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    $(".notLoggedIn").hide();
    $(".loggedIn").show();

    $("#nameInput").val(firebase.auth().currentUser.displayName);
    $("#emailInput").val(firebase.auth().currentUser.email);
    firebase.database().ref('applications/' + firebase.auth().currentUser.uid).once('value', function(snapshot){
        var val = snapshot.val();
        if(val != null){
            $("[name = 'dobMonth']").val(val.dobMonth);
            $("[name='grade'][value="+val.grade+"]").prop('checked', true);
            $("[name = 'dobYear']").val(val.dobYear);
            $("[name = 'dobDay']").val(val.dobDay);
            $("[name = 'gender']").val(val.gender);
            $("[name = 'phone']").val(val.phone);
            $("[name='tshirt'][value="+val.tshirt+"]").prop('checked', true);
            $("[name = 'food']").val(val.food);
            $("[name = 'github']").val(val.github);
            $("[name='refer'][value="+val.refer+"]").prop('checked', true);
            $("[name = 'anythingElse']").val(val.anythingElse);
            $("[name='mlh1'][value="+val.mlh1+"]").prop('checked', true);
            $("[name='mlh2'][value="+val.mlh2+"]").prop('checked', true);
        }
    });
  }else{
    window.location.replace("/dashboard");
  }
});
$("#otherSchool")
  .keyup(function(){
    $("#otherSchoolButton").attr("value", $("#otherSchool").val());
    $("#otherSchoolButton").prop("checked", true);

  })
$("#applyForm")
  .submit(function(e){
    e.preventDefault();
    var formDataArray = $("#applyForm").serializeArray();
    var resume = $("#resumeUpload")[0].files[0];
    if(resume != null){
        storageRef.child("resumes/" + UUIDv4() + ".pdf").put(resume).then(function(snapshot){
      function objectifyForm(formArray){returnArray={};for(var i=0;i<formArray.length;i++){returnArray[formArray[i]['name']]=formArray[i]['value'];}returnArray.resume = snapshot.a.downloadURLs[0]; return returnArray;}
      firebase.database().ref('applications/' + firebase.auth().currentUser.uid).set(objectifyForm(formDataArray));
    });
    }else{
        function objectifyForm(formArray){returnArray={};for(var i=0;i<formArray.length;i++){returnArray[formArray[i]['name']]=formArray[i]['value'];} return returnArray;}
      firebase.database().ref('applications/' + firebase.auth().currentUser.uid).set(objectifyForm(formDataArray)).then(function(){
          window.location.replace("/dashboard");
      });
    }

  });
