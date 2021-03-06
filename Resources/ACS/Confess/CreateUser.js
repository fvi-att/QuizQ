/**
 * @author fvi@
 * 
 * created @20121005
 * 匿名性の高いユーザーアカウントを作成する。
 */
exports.createUser = function(){
	
	if(Titanium.App.Properties.hasProperty('username'))
		return false;
	if(Titanium.App.Properties.hasProperty('password'))
		return false;


		var result = false;
		var actInd = Titanium.UI.createActivityIndicator({
		bottom : 10,
		height : 100,
		width : 100,
		message : '匿名で登録中',
		font:{fontFamily:'Helvetica Neue', fontSize:15,fontWeight:'bold'}
		// style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
	});
	
	actInd.show();
	
	var Cloud = require('ti.cloud');
	
	//ユーザー15文字　パスワード20文字
	var username = require('/util/random').getRandom(15);
	var password = require('/util/random').getRandom(20);
	
	 
    Cloud.Users.create({
       // email:email,
        username:username,
        password: password,
        password_confirmation: password
    }, function (e) {
        if (e.success) {
        	
        	actInd.hide();
        	
            var user = e.users[0];
            
            
            Titanium.App.Properties.setString('username',user.username);
            Titanium.App.Properties.setString('password',password);
            
           alert('"名無しさん"で登録しました。');
             
             result = true;
                
        } else {
            alert('何らかしらの原因で掲示板にアクセスできませんでした。もう一度起動してみてください');
            
            
            actInd.hide();
               
        }
    });
    
 
}
