if (Meteor.isClient) {
	var data = {}
	_Applications = new Meteor.Collection("runningApplications");
	console.log(_Applications.find())
	Template.runningApplications.helpers({
		applications: _Applications.find()
	});
	Template.navbar.helpers({
		UserName: "Laxmikant Dange"
	});
	Template.navbar.events({
		"click #_newApp" : function(){
			alert(" HOW TO SHOW THE POPUP");
			console.log(Session.get('modalVisible'));
		}
	});	
}

if (Meteor.isServer) {
	Meteor.startup(function() {
		// code to run on server at startup
		// if (!data) data = {}
		var Applications = new Meteor.Collection("runningApplications");
		// data.applications = Applications.find();
		// data.UserName = "Laxmikant"
	});
}
