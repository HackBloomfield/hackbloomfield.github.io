var appsView = new Vue({
  el: '#appsView',
  firebase: {
    appsDB: firebase.database().ref('applications').orderByChild('fullName')
  }
})
