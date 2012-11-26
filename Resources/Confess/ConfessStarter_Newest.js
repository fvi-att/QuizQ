/**
 * @author fvi@
 *
 * created@ 2012 08 09
 *
 * recreated @2012112
 * 
 */

var latest_update_posts;


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
	
	if(latest_update_posts && (Titanium.App.Properties.getDouble('last_flow_update') + 1000*30 < new Date().getTime)){
		//if(latest_update_posts){
		alert('どうやら再利用できるデータが存在するようです');
		
		new require('/ui/common/ConfessWindow/FlowView')(latest_update_posts);
		actInd.hide();
		
		
		return;
		
		
	}
	
	var condition = new Date()
	//condition.setDate(condition.getDate() -1);
	condition.setDate(condition.getDate() -1);
	
	var Cloud = require('ti.cloud');
	Cloud.Posts.query({
    where: {
       created_at:{'$gt':condition}
    }
}, function(e) {
		if (e.success) {
			var post = e.posts[0];
			actInd.hide();
			if(e.posts.length >0){
			 new require('/ui/common/ConfessWindow/FlowView')(e.posts);
			 latest_update_posts = e.posts;
			 
			 Titanium.App.Properties.setDouble('last_flow_update',new Date().getTime())
			//	alert('Success:\\n'+'count:'+e.posts.length + 'id: ' + post.id + '\\n' + 'title: ' + post.title + '\\n' + 'content: ' + post.content + '\\n' + 'updated_at: ' + post.created_at);
			}
		} else {
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			
			actInd.hide();
		}
	});

}
