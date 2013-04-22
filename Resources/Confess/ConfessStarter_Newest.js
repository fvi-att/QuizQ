/**
 * @author fvi@
 *
 * created@ 2012 08 09
 *
 * recreated @2012112
 * 
 */

var latest_update_posts;


exports.FlowdownloadStart = function() {
	
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

	var order = 'created_at';
	if (!Titanium.App.Properties.getBool('flow_side'))
		order = '-' + order;
		
	var condition = new Date()
	//condition.setDate(condition.getDate() -1);
	condition.setDate(condition.getDate() -1);
	
	var Cloud = require('ti.cloud');
	Cloud.Posts.query({
	page:1,
	per_page:100,
    where: {
       created_at:{'$gt':condition}
    },
    order:order
}, function(e) {
		if (e.success) {
			actInd.hide();
			
			Ti.API.info('getPostlength::'+e.posts.length);
			
			if(e.posts.length >0){
			 new require('/ui/common/ConfessWindow/FlowView')(e.posts);
			// latest_update_posts = e.posts;
			 
			 Titanium.App.Properties.setDouble('last_flow_update',new Date().getTime())
			//	alert('Success:\\n'+'count:'+e.posts.length + 'id: ' + post.id + '\\n' + 'title: ' + post.title + '\\n' + 'content: ' + post.content + '\\n' + 'updated_at: ' + post.created_at);
			}
		} else {
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			
			actInd.hide();
		}
	});

}
