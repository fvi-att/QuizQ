/*
 *
 * created by fvi@
 *
 *
 *
 *
 */

exports.setProperty = function() {
	//ゲーム全般に関する設定
	var INITIAL_POINT = 10;
	var INITIAL_RESPONSE_POINT = 3;

	if (!Titanium.App.Properties.hasProperty('lastTime'))
		Titanium.App.Properties.setDouble('lastTime', (new Date(2000, 1, 1, 23, 59, 59)).getTime())

	//下のポイントシステムに関する処理は本当に困るね
	//
	if (!Titanium.App.Properties.hasProperty('point'))
		Titanium.App.Properties.setInt('point', INITIAL_POINT);

	//オープニングをスキップするかの処理
	if (!Titanium.App.Properties.hasProperty('setOpening'))
		Titanium.App.Properties.setBool('setOpening', true);
	//パラメータ値の管理
	//人間のおしゃべり機能に関するパラメータ　を文字列で表現する
	if (!Titanium.App.Properties.hasProperty('prmt_talk'))
		Titanium.App.Properties.setString('prmt_talk', 'first_contact');

	//情報フローに関する制御処理
	if (!Titanium.App.Properties.hasProperty('flow_side'))
		Titanium.App.Properties.setBool('flow_side', true);

	//ハンドルネームに関する制御処理
	if (!Titanium.App.Properties.hasProperty('use_handlename'))
		Titanium.App.Properties.setBool('use_handlename', false);

	//ハンドルネーム
	if (!Titanium.App.Properties.hasProperty('handlename'))
		Titanium.App.Properties.setString('handlename', '名無しさん');

	if (!Titanium.App.Properties.hasProperty('last_flow_update'))
		Titanium.App.Properties.setDouble('last_flow_update', (new Date(2000, 1, 1, 23, 59, 59)).getTime())

	//ボタンの更新イベント情報
	for ( event_cnt = 0; event_cnt <= 9; event_cnt++) {
		if (!Titanium.App.Properties.hasProperty('event_batch' + event_cnt))
			//9つのすべてのプロパティ値の設定を初期化、定義
			Titanium.App.Properties.setBool('event_batch' + event_cnt, false);
	}
	
	//プロフィールに関する処理
	if(!Titanium.App.Properties.hasProperty('adjective'))
		Titanium.App.Properties.setString('adjective','とある')
	if(!Titanium.App.Properties.hasProperty('posession'))
		Titanium.App.Properties.setString('posession','名無しさん')
	if(!Titanium.App.Properties.hasProperty('age'))
		Titanium.App.Properties.setString('age','10代')
	
	
	
	//初期更新情報	ヘルプとWhat's newは常に更新しておく。
	var LATEST_APP_VERSION = 16
	if (Titanium.App.getVersion() <= LATEST_APP_VERSION) {
		if (!Titanium.App.Properties.hasProperty('event_batch1'))
			Titanium.App.Properties.setBool('event_batch1', true);

		if (!Titanium.App.Properties.hasProperty('event_batch3'))
			Titanium.App.Properties.setBool('event_batch3', true);
			
		if (!Titanium.App.Properties.hasProperty('event_batch7'))
			Titanium.App.Properties.setBool('event_batch7', true);

	}

}
