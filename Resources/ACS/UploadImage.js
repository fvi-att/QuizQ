/**
 * @author fvi@
 * created@201210111701
 *
 *
 *
 */
exports.uploadImage = function(imagepath) {
	var Cloud = require('ti.cloud');
	Cloud.Photos.create({
		
		photo : Titanium.Filesystem.getFile('photo.jpg')
	}, function(e) {
		if (e.success) {
			var photo = e.photos[0];
			alert('Success:\\n' + 'id: ' + photo.id + '\\n' + 'filename: ' + photo.filename + '\\n' + 'size: ' + photo.size, 'updated_at: ' + photo.updated_at);
		}
	});
}
