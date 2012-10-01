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
            alert('ユーザー名：'+user.lastname+'としてログインしました');
                
                Titanium.App.Properties.setString('user_name',user.username);
                
                Titanium.App.fireEvent('ReLogin');
                actInd.hide();
        } else {
           alert('ユーザー認証に失敗しました。もう一度入力してください')
                actInd.hide();
                
        }
        });
}
