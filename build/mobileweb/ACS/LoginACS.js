exports.LoginACS=function(b,c){var d=Titanium.UI.createActivityIndicator({bottom:10,height:100,width:100,message:"\u30ed\u30b0\u30a4\u30f3\u4e2d",font:{fontFamily:"Helvetica Neue",fontSize:15,fontWeight:"bold"}});d.show();require("ti.cloud").Users.login({login:b,password:c},function(a){a.success?(a=a.users[0],Titanium.UI.createNotification({duration:3E3,message:"\u540d\u7121\u3057\u3055\u3093\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3057\u305f"}).show(),Titanium.App.Properties.setString("user_id",
a.id),Titanium.App.fireEvent("ReLogin")):(a=Ti.UI.createOptionDialog({title:"\u533f\u540d\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3000\u518d\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u304b\uff1f",buttonNames:["Cancel","Ok"]}),a.addEventListener("click",function(a){1==a.index&&require("/ACS/LoginACS").LoginACS(b,c)}),a.show());d.hide()})};