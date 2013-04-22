/**
 * @author fvi
 * 
 * created by fvi@
 * 
 * created @ 2012 12 02
 */
exports.createCommonRow = function(image_path,title,side, photo, id, comment,created_at,num,row_obj_prmt){
	
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var source_row = require('/ui/common/ConfessWindow/ProjectTableRow').createRowObject(image_path, title, side, photo, id);
	
	//レスポンスデータ構造の保持(暫定)　現在JSON文字列
	source_row.comObj = comment;
	
	var row_height = source_row.row.getHeight();
	var row_width = source_row.row.getWidth();

	var json_status = JSON.parse(comment);
	

//ハンドルネームの設定に関する処理　ここでメッセージ内にハンドルネームが存在していた場合
//表示を行う
	var poster_name = json_status._HN

	if (!poster_name)
		poster_name = '名無しさん';
		
	//[2]でジャンルを表示するようにしている
	var junel_str = (JSON.stringify(row_obj_prmt.tags[0])).split('"')[2]
	var status_label = Titanium.UI.createLabel({
		text : 'by' + poster_name + '\n' + created_at+'\n #'+junel_str ,
		color : 'black',
		font : {
			fontSize : width / 27
		},
		textAlign : 'left',
		top : row_height * 0.05,
		left : width * 0.25

	});
	source_row.row.add(status_label);
	
	if(json_status.cardID){
		var openCardButton = Titanium.UI.createButton({
			backgroundImage : '/images/button/look/lookButton.png',
			backgroundSelectedImage : '/images/button/look/lookButton_Pressed.png',
			width:width *0.2,
			height:height*0.07,
			bottom:0,
			left:width *0.03
		});
		
		openCardButton.addEventListener('click',function(e){
		var dialog = Ti.UI.createOptionDialog({
			title : 'ひみつぶやきポイントを3ポイント使います。',
			buttonNames : ['キャンセル', 'Ok']
		});
		
		dialog.addEventListener('click', function(e) {
			if (e.index == 1) {// we read it only if get it is pressed
				
				if(Titanium.App.Properties.getInt('point') -3 < 0){
					alert('ひみつぶやきポイントが足りないようです\n色々つぶやいてレスをもらってみてはいかがでしょうか？');
					return null;
				}
				require('/ui/common/CardView/CardViewWindow').createCardViewWindow(title,json_status);
				
				Titanium.App.Properties.setInt('point',Titanium.App.Properties.getInt('point') -3);
				Titanium.App.fireEvent('modify_point',{delta:-3});
			}
		});

		
		
		dialog.show();
			
		});
		
		source_row.row.add(openCardButton);
	}

	function setCommentText(com_json) {
		
			var response = require('/ResponseObj/Response2Str').Perse(com_json)

			source_row.row.setHeight(source_row.row.getHeight()*(1 + 0.1 * response.sumCnt))

		return response.string;

	}

	//var comment_status = JSON.parse(comment)

	var comment_label = Titanium.UI.createLabel({
		//text : status_string,
		color : 'black',
		font : {
			fontSize : width / 25
		},
		textAlign : 'center',
		bottom : 0,
		left : width * 0.25

	});
	
	source_row.comment_label = comment_label;
	
	comment_label.setText(setCommentText(JSON.parse(comment)));

	source_row.row.add(comment_label);

	//コントローラ対策
	if(num)
		source_row.num = num;
		
		
	return source_row;
	
	
}
