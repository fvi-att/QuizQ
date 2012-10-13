/**
 * @author fvi
 * 
 * created @ 2012 08 02
 */

exports.LoginACS = function(id,password){
	  // Loginのサンプル
	  	var actInd = Titanium.UI.createActivityIndicator({
		bottom : 10,
		height : 100,
		width : 100,
		message : 'ログイン中',
		font:{fontFamily:'Helvetica Neue', fontSize:15,fontWeight:'bold'}
		// style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
	});
	
	actInd.show();
	  
    var Cloud = require('ti.cloud');  
      
    Cloud.Users.login({
        login:    id,
        password: password
    }, function (e) {
        if (e.success) {
            var user = e.users[0];
            //alert('名無しさんとしてログインしました');
            Titanium.UI.createNotification({
			duration : 3000,
			message : "名無しさんでログインしました"
			}).show();

                
                
                Titanium.App.fireEvent('ReLogin');
                actInd.hide();
        } else {
        	//alert('error::'+e.message+'\n'+id+'\n'+password)
          var dialog = Ti.UI.createOptionDialog({
			title : '匿名ログインできませんでした　再ログインしますか？',
			buttonNames : ['Cancel', 'Ok']
		});
				dialog.addEventListener('click', function(e) {
			if (e.index == 1) {// we read it only if get it is pressed
				require('/ACS/LoginACS').LoginACS(id,password);
					
			}
		});

		dialog.show();
	
                actInd.hide();
                
        }
        });
}
