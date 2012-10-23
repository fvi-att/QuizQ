/**
 * @author fvi@
 *
 * created@ 2012 08 09
 *
 * recreated @2012112
 * 
 */

exports.FlowdownloadStart = function(post_id) {
	
	var actInd = Titanium.UI.createActivityIndicator({
		bottom : 10,
		height : 100,
		width : 100,
		message : 'つぶやきを集めています',
		font : {
			fontFamily : 'Helvetica Neue',
			fontSize : 15,
			fontWeight : 'bold'
		}
		// style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
	});

	actInd.show();
	
	var condition = new Date()
	//condition.setDate(condition.getDate() -1);
	condition.setDate(condition.getDate() -1);
	
	var Cloud = require('ti.cloud');
	Cloud.Posts.query({
    page: 1,
    per_page: 20,
    where: {
       // reviews_count: { '$gt': 1.0 }
       created_at:{'$gt':condition}
    }
}, function(e) {
		if (e.success) {
			var post = e.posts[0];
			actInd.hide();
			if(e.posts.length >0){
			 	var flowWin = new require('/ui/common/ConfessWindow/FlowView')(e.posts);
			//	alert('Success:\\n'+'count:'+e.posts.length + 'id: ' + post.id + '\\n' + 'title: ' + post.title + '\\n' + 'content: ' + post.content + '\\n' + 'updated_at: ' + post.created_at);
			}
		} else {
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			
			actInd.hide();
		}
	});

}
