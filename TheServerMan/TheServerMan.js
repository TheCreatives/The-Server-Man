if (Meteor.isClient) {
  _Applications = new Meteor.Collection("applications");
  console.log(_Applications.find())
  Template.runningApplications.helpers({
    applications: _Applications.find()
  });
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
    var Applications = new Meteor.Collection("applications");
    Applications.update({
      $set: {
        link: "http://localhost/serverman/#/test1"
      }
    })
  });
}
