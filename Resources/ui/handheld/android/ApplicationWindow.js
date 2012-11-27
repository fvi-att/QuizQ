//Application Window Component Constructor
function ApplicationWindow() {
	
	var self = require('/ui/common/MyCivilizationWindow').openCivilView()



	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
