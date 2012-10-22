/*
 * created @ 2012 10 23
 * 
 * created by fvi@
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

exports.getJST = function(date){
	var placedTime = date;
	
	return placedTime.getFullYear() + '-' + placedTime.getMonth() + '-' + placedTime.getDate()+'::'+placedTime.getHours()+':'+placedTime.getMinutes()+':'+placedTime.getSeconds()+'(JST)';
}