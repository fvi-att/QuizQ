/*
 * created by fvi @ 
 * 
 * 
 * this module provide what you made for of it
 * 
 */

exports.getMyConfess = function(){
		var actInd = Titanium.UI.createActivityIndicator({
		bottom : 10,
		height : 100,
		width : 100,
		message : '自分のつぶやきを集めています',
		font : {
			fontFamily : 'Helvetica Neue',
			fontSize : 15,
			fontWeight : 'bold'
		}
		// style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
	});

	actInd.show();
	
	var user_id = Titanium.App.Properties.getString('user_id');
	
	
	if(!user_id){
		alert('エラーが発生しました、アプリを再起動してください');
		return;
	}
	var condition = new Date()
	//condition.setDate(condition.getDate() -1);
	condition.setDate(condition.getDate() -1);
	
	var Cloud = require('ti.cloud');
	Cloud.Posts.query({
    where: {
       user_id:user_id
    }
}, function(e) {
		if (e.success) {
			var post = e.posts[0];
			actInd.hide();
			if(e.posts.length >0){
				
			 /*	var flowWin = */new require('/ui/common/ConfessWindow/FlowView')(e.posts);
			//	alert('Success:\\n'+'count:'+e.posts.length + 'id: ' + post.id + '\\n' + 'title: ' + post.title + '\\n' + 'content: ' + post.content + '\\n' + 'updated_at: ' + post.created_at);
			}
		} else {
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			
			actInd.hide();
		}
	});
}
