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
	//端末内でuser_idを保存する。
	require('/ACS/LogoutACS').LogoutACS();
	require('/ACS/Confess/LoginACS').LoginACS();
	
	
	actInd.hide();
	//再トライする
	require('/Confess/getMyConfessData').getMyConfess();
		
	return;
	}

	var order = 'created_at';
	if (!Titanium.App.Properties.getBool('flow_side'))
		order = '-' + order;
	
	var Cloud = require('ti.cloud');
	Cloud.Posts.query({
	page:1,
	per_page:100,
    where: {
       user_id:user_id
    },
    order:order
}, function(e) {
		if (e.success) {
			var post = e.posts[0];
			actInd.hide();
			if(e.posts.length >0){
				
			 new require('/ui/common/MyConfessWindow/FlowView')(e.posts);
			//	alert('Success:\\n'+'count:'+e.posts.length + 'id: ' + post.id + '\\n' + 'title: ' + post.title + '\\n' + 'content: ' + post.content + '\\n' + 'updated_at: ' + post.created_at);
			}
		} else {
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			
			actInd.hide();
		}
	});
}
