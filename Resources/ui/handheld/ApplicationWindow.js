//Application Window Component Constructor
function ApplicationWindow() {

	var FirstView = require('ui/common/FirstView');


	
	var self = require('/ui/common/MyCivilizationWindow').openCivilView()



	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
