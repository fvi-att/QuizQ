/**
 * @author fvi@
 *
 * created @ 201210051050
 *
 */
exports.createPost = function(title,junel, photo_path,use_HN,card_content) {

	var cardID = require('/util/random').getRandom(20);
	//ハンドルネームに直しておくね
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
	
	function UploadCardContent(){
	
		require('/ACS/Confess/CardSystem/UploadCard').UploadCard(cardID,card_content);
		
	}

	function ReturnMessage(e) {
		if (e.success) {
			var post = e.posts[0];

			if (!require('/DB/ConfessDB').InsertPost(post.id, post.title, post.content)) {
				alert('データを登録できませんでした');
				return false;
			}
			
			
			UploadCardContent();

			actInd.hide();

			//投稿用ウィンドウを閉じるイベントを発生させる
			Titanium.App.fireEvent('complete_post');
			//alert('Success:\\n' + 'id: ' + post.id + '\\n' + 'title: ' + post.title + '\\n' + 'content: ' + post.content + '\\n' + 'photo: ' + post.photo+ post.content + '\\n' + ': ' + post.photo);
			
			return true;

		} else {
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			actInd.hide();

			//alert('投稿に失敗しました。もう一度投稿ボタンを押してください');
			return false;

		}
	}

	function UploadWithImage() {
		//content変更
		var init_comment = {interest:0,noway:0,bad:0};
		
		var comment =  JSON.stringify(init_comment)
		Cloud.Posts.create({
			content :comment,
			title : title,
			tags : [junel],
			photo : Titanium.Filesystem.getFile(photo_path),
			acl_name :'All_Public'
		}, function(e) {
			return ReturnMessage(e);
		});
	}
	
	function AddHN(data){
		if(Titanium.App.Properties.hasProperty('handlename'))
				data['_HN'] = Titanium.App.Properties.getString('handlename');
		
	}
	
	function AddCardID(data){
		data['cardID'] = cardID;
		data['cardSubPeopleNum']=0;
	}
	
	function Upload() {
		//初期型の３つを定義ておく。
		var init_comment = {interest:0,noway:0,bad:0};
		
		//いろいろなデータを付加しておく
		if(use_HN)
			 AddHN(init_comment);
		
		AddCardID(init_comment);
		
		var comment =  JSON.stringify(init_comment)
		Cloud.Posts.create({
			content : comment,
			title : title,
			tags : [junel],
			acl_name :'All_Public'
		}, function(e) {
			return ReturnMessage(e);
		});
	}

}
