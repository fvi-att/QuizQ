exports.openWin=function(a){a||(a="http://xicolo.com/wordpress/?page_id=179");height=Ti.Platform.displayCaps.platformHeight;width=Ti.Platform.displayCaps.platformWidth;var b=Titanium.UI.createWindow({exitOnClose:!1,fullscreen:!1,navBarHidden:!0,orientationModes:[Titanium.UI.PORTRAIT]}),a=Titanium.UI.createWebView({url:a,weight:Titanium.UI.FILL,height:Titanium.UI.FILL});b.add(a);a=Titanium.UI.createButton({title:"\u9589\u3058\u308b",width:0.6*width,height:"auto",top:0.9*height});a.addEventListener("click",
function(){b.close();delete b});b.add(a);b.open()};