/**
 * @author fvi
 *
 * created@ 2012 07 19
 *
 */

function ProjectList() {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

	//デバッグメッセージ
	var debug_text = Titanium.UI.createLabel({
		text : 'DEBUG:',
		textAlign : 'center',
		top : 0,
		color : 'black',
		width : width,
		height : height * 0.1,
		visible : false	//DEBUG専用

	});

	var projectList = [];

	//plus section
	projectList.push(Titanium.UI.createTableViewRow({
		width : Titanium.UI.FILL,
		height : height / 15,
		focusable : false,
		backgroundImage : '/images/Table/favorite_1.png'
	}));
	projectList.push(Titanium.UI.createTableViewRow({
		width : Titanium.UI.FILL,
		height : height / 15,
		focusable : false,
		backgroundImage : '/images/Table/section_1.png'
	}));

	// Create a TableView.
	var aTableView = Ti.UI.createTableView({
		data : projectList,
		showVerticalScrollIndicator : true,
		top : height * 0.05,
		width : Titanium.UI.FILL,
		height : height * 0.7
	});

	//新規でたしてみる  sample
	(function AddSample() {
		if (Titanium.App.Properties.getBool('isSampleNeed')) {
			/*

			 var spl_row = require('/ui/common/ProjectTableRow').createRowObject('', '(例)りんごは林檎ですがゴリラの漢字名は？', 0);
			 var spl_row2 = require('/ui/common/ProjectTableRow').createRowObject('', '(例)2012年のサラリーマン川柳受賞作は？',0);
			 var spl_row3 = require('/ui/common/ProjectTableRow').createRowObject('', '(例)ユニークな貯金法ってある？', 0);
			 var spl_row4 = require('/ui/common/ProjectTableRow').createRowObject('', '(例)アメリカのおもしろ観光スポットってある？', 0);

			 aTableView.appendRow(spl_row.row);
			 aTableView.appendRow(spl_row2.row);
			 aTableView.appendRow(spl_row3.row);
			 aTableView.appendRow(spl_row4.row);

			 一時停止
			 */

		}
	})
	//DBから呼び出していろいろやる
	try {
		var db_results;
		//カラムの表記
		db_results = require('/DB/SQL').getBookMark();
		debug_text.setText('DEBUG::' + db_results.getRowCount())

		while (db_results.isValidRow()) {
			var row = require('/ui/common/CollectionTable/ProjectTableRow').createRowObject('', db_results.fieldByName('TITLE'), 0, db_results.fieldByName('BOOK_ID'));
			row.row.quizID = db_results.fieldByName('BOOK_ID');
			aTableView.insertRowAfter(0, row.row);
			db_results.next();
		}
	} catch(dberr) {
		alert('テーブルの作成に失敗しました データベースに問題がありました');
	}
	//end

	Titanium.App.addEventListener('addSampleQuiz', function(e) {
		AddSample();
	});

	//Titanium.App.fireEvent('addFavorite',{content:download}); お気に入り登録させる
	/*
	 Titanium.App.addEventListener('addFavorite', function(e) {
	 var content = e.content;
	 var row = require('/ui/common/ProjectTableRow').createRowObject('', content.text, 0,content.ID);

	 aTableView.insertRowAfter(0, row.row);
	 });
	 */
	var view = Titanium.UI.createWindow({
		title : 'クイズこれくしょん',
		backgroundImage : '/images/opening/old_paper.jpg',

		exitOnClose : false,
		fullscreen : true,
		orientationModes : [Titanium.UI.PORTRAIT]
	})

	//image cork board
	var back_cork = Titanium.UI.createImageView({
		image : '/images/background/back_lightblue.png',
		top : height * 0.05,
		height : height * 0.6,
		width : width
	})
	view.add(back_cork);

	//	view.add(searchBar);
	view.add(aTableView);

	var add_button = new require('/ui/common/button/button')('add');

	add_button.setTop(height * 0.8);
	view.add(add_button);

	add_button.addEventListener('click', function(e) {
		require('/ui/common/AddProject').AddProject();

	});

	/*
	 var tabView = require('/ui/common/menuTab/MenuTab').createMenuTab(2);
	 view.add(tabView.view);
	 */

	view.add(debug_text);

	view.open();

	return view;

}

module.exports = ProjectList;

