var functions = require('firebase-functions');

exports.appliedStatusUpdate = functions.database.ref('applications').onWrite(event =>{
  var snapVal = event.data.val();
  for(var key in snapVal){
    functions.database.ref('appStatus/'+key).update({applied: true});
  }
});
// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// })
