windowFunctions.Unsubscribe=function(){function f(){for(var a=0;a<c.length;a++)c[a].blur();d.hide();a={device_token:pushDeviceToken};b.value&&b.value.length&&(a.channel=b.value);Cloud.PushNotifications.unsubscribe(a,function(a){a.success?(b.value="",alert("Unsubscribed!")):error(a);d.show()})}var e=createWindow(),a=addBackButton(e),a=Ti.UI.createScrollView({top:a+u,contentHeight:"auto",layout:"vertical"});e.add(a);if(pushDeviceToken){var b=Ti.UI.createTextField({hintText:"Channel (leave blank for all)",
top:10+u,left:10+u,right:10+u,height:40+u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,autocorrect:!1});a.add(b);var d=Ti.UI.createButton({title:"Unsubscribe",top:10+u,left:10+u,right:10+u,bottom:10+u,height:40+u});a.add(d);var c=[b];d.addEventListener("click",f);for(a=0;a<c.length;a++)c[a].addEventListener("return",f);e.addEventListener("open",function(){b.focus()})}else a.add(Ti.UI.createLabel({text:"Please visit Push Notifications > Settings to enable push!",
textAlign:"center",color:"#000",height:"auto"}));e.open()};