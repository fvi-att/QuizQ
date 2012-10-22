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
		var view = Titanium.UI.createWindow({
		title : L('collection'),
		navBarHidden : true, //タイトルバーを隠す
		//backgroundImage : '/images/opening/old_paper.jpg',
		backgroundColor:'rgb(255,235,205)',//ivory color

		exitOnClose : false,
		fullscreen : true,
		orientationModes : [Titanium.UI.PORTRAIT]

	});


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
		width : width,
		height : height * 0.8
	});
	

	
	for(count =download.length;count > -1;count--){
			if(!download[count])
				continue;
				
				var STUB_row = require('/ui/common/ConfessWindow/FlowRow').createRowObject('',download[count].created_at,download[count].title,download[count].content, 0,download[count].id,download[count].photo,view);
				STUB_row.row.setHasChild(false);
	
				aTableView.appendRow(STUB_row.row);
	}
	

	//	view.add(searchBar);
	view.add(aTableView);
	
	
	
	
	var close_button = Titanium.UI.createButton({
		title:'閉じる',
		width:width*0.6,
		height:'auto',
		top:height*0.9
	});
	
	close_button.addEventListener('click',function(e){
		view.close();
		delete view;
	});
	
	view.add(close_button);
	




	view.open();

	return view;

}

module.exports = ProjectList;

