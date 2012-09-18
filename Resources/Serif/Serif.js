/**
 * @author fvi@
 * 
 * created @ 2012 09 13
 * 
 * 
 */
exports.getSerif = function(situation){
	
	Titanium.API.info('getSerifMessage::'+situation);
	
	
	switch(situation){
		case "need_apple":
			return 'apple_need';
		
		
		default :
			return 'first_contact';
			
	}
}
