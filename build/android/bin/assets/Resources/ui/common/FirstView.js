//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var background_path = require('/util/getbackPathWithTime').getPath();
	var self = Ti.UI.createView({
		backgroundImage:background_path
	});
	
	return self;
}

module.exports = FirstView;
