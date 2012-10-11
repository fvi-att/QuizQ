/**
 * @author fvi@
 * created@201210111701
 *
 *
 *
 */
exports.UploadImage = function(imagepath) {
	var Cloud = require('ti.cloud');
	Cloud.Photos.create({
		
		photo : Titanium.Filesystem.getFile(imagepath)
	}, function(e) {
		if (e.success) {
			var photo = e.photos[0];
			alert('画像を投稿しました:\\n' + 'id: ' + photo.id + '\\n' + 'filename: ' + photo.filename + '\\n' + 'size: ' + photo.size, 'updated_at: ' + photo.updated_at);
		}else{
			alert('画像の投稿に失敗しました')
		}
	});
}
