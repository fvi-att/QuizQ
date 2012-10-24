/*
 * 
 * created by fvi@
 * 
 * 
 * 
 * 
 */


exports.setProperty = function(){
	//ゲーム全般に関する設定
	var INITIAL_POINT = 15;
	if (Titanium.App.Properties.getBool('isIntroNeed') == null)
		Titanium.App.Properties.setBool('isIntroNeed', true);

	if (Titanium.App.Properties.getBool('isSampleNeed') == null)
		Titanium.App.Properties.setBool('isSampleNeed', true);

	if (Titanium.App.Properties.getDouble('lastTime') == null)
		Titanium.App.Properties.setDouble('lastTime', (new Date).getTime())

	if (Titanium.App.Properties.getInt('point') == null) {
		Titanium.App.Properties.setInt('point', INITIAL_POINT);
	} else {

		var rst = Titanium.App.Properties.getInt('point')

		if (rst <= 0)
			rst = 0;

		//起動特典　一回あたり　１ポイント
		rst++;

		Titanium.App.Properties.setInt('point', rst);
	}
	
	//パラメータ値の管理
	//人間のおしゃべり機能に関するパラメータ　を文字列で表現する
	if (!Titanium.App.Properties.hasProperty('prmt_talk'))
		Titanium.App.Properties.setString('prmt_talk', 'first_contact');

	if (!Titanium.App.Properties.hasProperty('civ_population'))
		Titanium.App.Properties.setInt('civ_population', 10);

	if (!Titanium.App.Properties.hasProperty('civ_food'))
		Titanium.App.Properties.setInt('civ_food', 30);

	if (!Titanium.App.Properties.hasProperty('civ_culture'))
		Titanium.App.Properties.setInt('civ_culture', 5);

	if (!Titanium.App.Properties.hasProperty('civ_money'))
		Titanium.App.Properties.setInt('civ_money', 50);
		
	//情報フローに関する制御処理
		if (!Titanium.App.Properties.hasProperty('flow_side'))
		Titanium.App.Properties.setBool('flow_side', true);
}
