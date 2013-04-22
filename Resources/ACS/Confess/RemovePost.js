/**
 * @author fvi@
 *
 * created @ 20121005
 *
 */
function DoRemovePost(id) {
	var Cloud = require('ti.cloud')
	Cloud.Posts.remove({
		post_id : id
	}, function(e) {
		if (e.success) {
			alert('投稿を削除しました');
			return true
		} else {
			 alert('投稿を削除できませんでした。もう一度削除ボタンを押してください')
			return false
		}
	});
}

exports.RemovePost = function(post_id){
		var dialog = Ti.UI.createOptionDialog({
			title : 'このポストの削除を行います。',
			buttonNames : ['キャンセル', 'Ok']
		});
		
		dialog.addEventListener('click', function(e) {
			if (e.index == 1) {// we read it only if get it is pressed
				return DoRemovePost(post_id)
			}
		});

		
		
		dialog.show();
		
}

