//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
<<<<<<< HEAD
	var background_path = require('/util/getbackPathWithTime').getPath();
	var self = Ti.UI.createView({
		backgroundImage:background_path
=======
	var self = Ti.UI.createView({
		backgroundImage:'/images/note.jpg'
		
>>>>>>> 0e5682e4bab3d01c10cddd79355ba1fe0ab22cc8
	});
	
	return self;
}

module.exports = FirstView;
