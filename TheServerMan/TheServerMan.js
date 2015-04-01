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
			$(".modal").show();
		}
	});	
	Template.newAppForm.events({
		"click .close" : function(){
			$(".modal").hide();
		},
		"click .submit" : function(evt, tmpl){
			var name = tmpl.find(".name").value;
			var size = tmpl.find(".size").value;
			var link = tmpl.find(".link").value;
			var version = tmpl.find(".version").value;
			addNewAppForm(name, size, link, version);
			$(".modal").hide();
		},
	});	
	var addNewAppForm = function(name, size, link, version){
		_Applications.insert({name:name, size: size, link: link, version:version});
	}
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
