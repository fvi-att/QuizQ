windowFunctions["Show Photo"]=function(d){var a=createWindow(),f=addBackButton(a),b=Ti.UI.createScrollView({top:f+u,contentHeight:"auto",layout:"vertical"});a.add(b);var e=Ti.UI.createLabel({text:"Loading, please wait...",textAlign:"left",height:30+u,left:20+u,right:20+u});b.add(e);Cloud.Photos.show({photo_id:d.id},function(a){b.remove(e);var c=Ti.UI.createButton({title:"Update Photo",top:10+u,left:10+u,right:10+u,bottom:10+u,height:40+u});c.addEventListener("click",function(){handleOpenWindow({target:"Update Photo",
id:d.id})});b.add(c);c=Ti.UI.createButton({title:"Remove Photo",top:10+u,left:10+u,right:10+u,bottom:10+u,height:40+u});c.addEventListener("click",function(){handleOpenWindow({target:"Remove Photo",id:d.id})});b.add(c);a.success?enumerateProperties(b,a.photos[0],20):error(a)});a.open()};