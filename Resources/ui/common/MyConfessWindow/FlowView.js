/**
 * @author fvi
 *
 * created@ 2012 07 19
 * refactering 2012 1202
 */

function FlowWindow(download) {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var win = require('/ui/common/CommonFlowTableWindow')()
	var flowTableView = win.table;
	
	//現時点でflowdataは何の役割を果たしていないが　ここでデータを処理するMVCのControllerの役割を果たす。
	//なるべくどのデータを渡すかをこのビューで記述しないようにする。
	var flow_data = require('/Confess/Flowdata').createDataObject(download);
	
	

	function createRow(count) {
		//いつかはセクションごとに分割で切るようにしていく
		var data = flow_data.getAllData()
		//稀に投稿データが破損して常時出来ないことがあるので回避処理を事前に行う
		if (!data[count])
			return;

		var createdRow = require('/ui/common/CommonConfessRow').createCommonRow('', data[count].title, 0, data[count].photo, data[count].id, data[count].content, data[count].created_at, count, data[count]);
		createdRow.row.setHasChild(false);
		createdRow.row.post_username = data[count].user;

		var trashButton = Titanium.UI.createButton({
			backgroundImage : '/images/icon/trash/trash.png',
			backgroundSelectedImage : '/images/icon/trash/trash_pressed.png',
			width : width * 0.07,
			height : width * 0.07,
			top:height  *0.02,
			right:width *0.05
		})

		trashButton.addEventListener('click', function(e) {
			
			//サーバ上で投稿データの削除が成功したかどうか確認した後にUI上でもtableViewから削除を試みる
			if(require('/ACS/Confess/RemovePost').RemovePost(createdRow.row.post_id))
				Titanium.App.fireEvent('remove_post_row',{row:createdRow.row})
			//いいアイデアが思いつかないお
		})

		createdRow.row.add(trashButton)

		flowTableView.appendRow(createdRow.row);

	}
	
	for ( count = 0; count < download.length; count++)
			createRow(count);

}

module.exports = FlowWindow;

