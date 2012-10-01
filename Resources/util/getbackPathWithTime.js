/*
 * 
 * created by fvi @
 * 
 * created @ 2012 09 11
 * 
 */

exports.getPath = function(){
	
	var time = new Date().getHours();
	
	if((time > 6) && (time < 18))
		return '/images/civ/ancient/back/background.png';
	
	
	return '/images/civ/ancient/back/background_night.PNG';
	
}
