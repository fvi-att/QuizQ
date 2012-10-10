/**
 * @author fvi
 * 
 * created @ 2012 08 02
 */

exports.LoginACS = function(){
	  //ログインの際、きちんと確認を行う
	  if(!Titanium.App.Properties.hasProperty('username'))
	  	return false;
	  if(!Titanium.App.Properties.hasProperty('password'))
	  	return false;
	  	
	  
	  require('/ACS/LoginACS').LoginACS(Titanium.App.Properties.getString('username'),Titanium.App.Properties.getString('password'));
	  
	 
}
