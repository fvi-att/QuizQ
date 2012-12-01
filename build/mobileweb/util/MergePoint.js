/**
 * @author fvi
 * 
 * @created 2012 10 30
 */
exports.Merge_point = function(point){
			
		var rst = Titanium.App.Properties.getInt('point');
		rst += point;
		
		Titanium.App.Properties.setInt('point', rst);
				//ネット上のバスケットに保存されたポイントの初期化を行う。
		require('/ACS/Confess/UserPointKVS').setPointKVS(Titanium.App.Properties.getString('username'),0);
}
