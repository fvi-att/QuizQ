function PointFrame(f,c){var a=null,b=null;if(c){if(c.width)a=c.width;if(c.height)b=c.height}a||(a=Ti.Platform.displayCaps.platformWidth/1.5);b||(b=Ti.Platform.displayCaps.platformHeight/8);var d=Titanium.UI.createView({backgroundImage:"/images/number/Plate.PNG",width:a,height:b}),e=require("/counter/counter").getCounter(f);for(p_cnt=0;p_cnt<e.length;p_cnt++){var g=Titanium.UI.createImageView({width:a/6,height:b/1.5,url:"/images/number/"+e[p_cnt]+".PNG",center:{x:a/8+p_cnt*a/7,y:b/2}});d.add(g)}return d}
module.exports=PointFrame;
