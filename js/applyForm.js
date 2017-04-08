/* global firebase */
/* global $, Vue */
firebase.auth().onAuthStateChanged((usr) => {
  let appForm = new Vue({
    el: '#applyFormDiv',
    firebase: {
      myApp: {
        source: firebase.database().ref('applications').child(usr.uid),
        asObject: true,
      },
    },
  });
  if (usr) {
    $('.notLoggedIn').hide();
    $('.loggedIn').show();

    $('#nameInput').val(firebase.auth().currentUser.displayName);
    $('#emailInput').val(firebase.auth().currentUser.email);
  } else {
    /* global window */
    window.location.replace('/dashboard');
  }
});
$('#otherSchool')
  .keyup(() => {
    $('#otherSchoolButton').attr('value', $('#otherSchool').val());
    $('#otherSchoolButton').prop('checked', true);
  });
$('#applyForm')
  .submit((e) => {
    e.preventDefault();
    const formDataArray = $('#applyForm').serializeArray();
    const resume = $('#resumeUpload')[0].files[0];
    if (resume != null) {
      /* global storageRef, UUIDv4 */
      storageRef.child('resumes/' + UUIDv4() + '.pdf').put(resume).then((snapshot) => {
        function objectifyForm(formArray){returnArray={}; for(var i=0;i<formArray.length;i++){returnArray[formArray[i]['name']]=formArray[i]['value'];}returnArray.resume = snapshot.a.downloadURLs[0]; return returnArray;}
      firebase.database().ref('applications/' + firebase.auth().currentUser.uid).set(objectifyForm(formDataArray));
    });
    } else {
      function objectifyForm(formArray){returnArray={};for(var i=0;i<formArray.length;i++){returnArray[formArray[i]['name']]=formArray[i]['value'];} return returnArray;}
      firebase.database().ref('applications/' + firebase.auth().currentUser.uid).set(objectifyForm(formDataArray)).then(function(){
          window.location.replace('/dashboard');
      });
    }

  });
