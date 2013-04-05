/**
 * @author fvi@
 *
 * created @ 201210051050
 *
 */
exports.createPost = function(title, junel, photo_path, use_HN) {
	var actInd = Titanium.UI.createActivityIndicator({
		bottom : 10,
		height : 100,
		width : 100,
		message : '名無しさんとして投稿中',
		font : {
			fontFamily : 'Helvetica Neue',
			fontSize : 15,
			fontWeight : 'bold'
		}
		// style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
	});

	actInd.show();

	var Cloud = require('ti.cloud');

	if (photo_path) {
		return UploadWithImage();
	} else {
		return Upload();
	}

	//以下詳細な処理

	function ReturnMessage(e) {
		if (e.success) {
			var post = e.posts[0];

			if (!require('/DB/ConfessDB').InsertPost(post.id, post.title, post.content)) {
				alert('データを登録できませんでした');
				return false;
			}
			actInd.hide();

			//投稿用ウィンドウを閉じるイベントを発生させる
			Titanium.App.fireEvent('complete_post')
			return true;

		} else {
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			actInd.hide();
			return false;

		}
	}

	function UploadWithImage() {
		//content変更
		var init_comment = {
			interest : 0,
			noway : 0,
			bad : 0
		};

		var comment = JSON.stringify(init_comment)

		Cloud.Posts.create({
			content : comment,
			title : title,
			tags : [junel],
			photo : Titanium.Filesystem.getFile(photo_path),
			acl_name : 'All_Public'
		}, function(e) {
			return ReturnMessage(e);
		});
	}

	function AddHN(data) {
		if (use_HN) {
			if (Titanium.App.Properties.hasProperty('handlename')) {
				data['_HN'] = Titanium.App.Properties.getString('handlename') + '(' + Titanium.App.Properties.getString('adjective') + 'の' + Titanium.App.Properties.getString('posession') + ','+ Titanium.App.Properties.getString('age')+')'
			}
		}else{
				data['_HN'] = '(' + Titanium.App.Properties.getString('adjective') + 'の' + Titanium.App.Properties.getString('posession') + ',' + Titanium.App.Properties.getString('age') + ')'
		}
	}

	function Upload() {
		//初期型の３つを定義ておく。 あとでコメントモジュールに統合する
		var init_comment = {
			interest : 0,
			noway : 0,
			bad : 0
		};

		//if(use_HN)
		AddHN(init_comment);

		var comment = JSON.stringify(init_comment)
		Cloud.Posts.create({
			content : comment,
			title : title,
			tags : [junel],
			acl_name : 'All_Public'
		}, function(e) {
			return ReturnMessage(e);
		});
	}

}
