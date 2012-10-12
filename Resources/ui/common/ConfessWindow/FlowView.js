/**
 * @author fvi
 *
 * created@ 2012 07 19
 *
 */

function ProjectList(download) {
	/*
	 * e.posts[0]
	 * 
	 * 
	 */
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;


	var projectList = [];
	/*
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
	*/
	// Create a TableView.
	var aTableView = Ti.UI.createTableView({
		data : projectList,
		showVerticalScrollIndicator : true,
		top : height * 0.1,
		width : Titanium.UI.FILL,
		height : height * 0.7
	});
	
	for(count =0;count < download.length;count++){
				var STUB_row = require('/ui/common/ConfessWindow/FlowRow').createRowObject('',download[count].title, 0,null);
				STUB_row.row.setHasChild(false);
	
				aTableView.appendRow(STUB_row.row);
	}
	

	
	
	aTableView.addEventListener('click',function(e){
		alert(JSON.stringify(e));
	})


	var view = Titanium.UI.createWindow({
		title : L('collection'),
		navBarHidden : true, //タイトルバーを隠す
		//backgroundImage : '/images/opening/old_paper.jpg',
		backgroundColor:'rgb(255,235,205)',//ivory color

		exitOnClose : false,
		fullscreen : true,
		orientationModes : [Titanium.UI.PORTRAIT]

	});


	//	view.add(searchBar);
	view.add(aTableView);




	view.open();

	return view;

}

module.exports = ProjectList;

