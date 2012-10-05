/**
 * @author fvi@
 *
 * created @ 20121005
 *
 */
exports.RemovePost = function(id) {

	Cloud.Posts.remove({
		post_id : id
	}, function(e) {
		if (e.success) {
			alert('投稿を削除しました');
		} else {
			//alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			 alert('投稿を削除できませんでした。もう一度削除ボタンを押してください')
		}
	});
}
