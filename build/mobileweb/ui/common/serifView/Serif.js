exports.openView=function(c){height=Ti.Platform.displayCaps.platformHeight;width=Ti.Platform.displayCaps.platformWidth;var a=Titanium.UI.createView({backgroundImage:"/images/serif/serif.png",top:1.2*height,width:width,height:"auto"}),b=Titanium.UI.createLabel({text:L(require("/Serif/Serif").getSerif(Titanium.App.Properties.getString("prmt_talk"))),backgroundImage:"/images/transparent.png",color:"#191970",top:0,width:0.8*width,height:0.35*height});a.add(b);b=Titanium.UI.createButton({backgroundImage:"/images/cancel/cancel.png",
width:0.06*width,height:0.05*height,center:{x:0.93*width,y:0.06*height}});b.addEventListener("click",function(){c.remove(a);a=null});a.add(b);c.add(a);a.addEventListener("click",function(){c.remove(a);delete a});a.animate({top:0.55*height,duration:500},function(){a.animate({top:0.6*height,duration:600})})};