/*
 * 
 * created @ 20121029
 * createe by fvi @
 * 
 * this module provide update with tuning multi thread.
 * 
 */

exports.UpdateDelta = function(username,delta){
	
	alert('STUB:このデバイス：'+Titanium.App.Properties.getString('username')+'\n'+
			'これからのname::'+username.username);
	
	
	
	function setPoint(update_point){
		
		return require('/ACS/Confess/UserPointKVS').setPointKVS(username.username,update_point);
	}
		//{value:keyvalue.value}
		Titanium.App.addEventListener('got_point',function(e){
			var update_point =0;
			update_point = e.value;
			update_point += delta;
			
			setPoint(update_point);
			
		});
		
	require('/ACS/Confess/PointSystem/UserPointKVS').getPointKVS(username.username);
	//データの取得が完了すると'got_point'が実行される
		
	
}
