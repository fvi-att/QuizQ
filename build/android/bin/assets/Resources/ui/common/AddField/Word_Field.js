function ThreeChoiceView(){height=Ti.Platform.displayCaps.platformHeight;width=Ti.Platform.displayCaps.platformWidth;var a=Titanium.UI.createView({backgroundImage:"/images/background/back_lightblue.png",height:height*0.3,width:Titanium.UI.FILL,top:height*0.27}),b=Titanium.UI.createTextField({top:0,hintText:"\u6b63\u89e3\u306e\u5358\u8a9e\u3092\u5165\u308c\u3066\u304f\u3060\u3055\u3044\n(\u4f8b\uff1a\u308a\u3093\u3054\u3000\u30d0\u30ca\u30ca\u3000\u3076\u3069\u3046)",width:Titanium.UI.FILL}),c=Titanium.UI.createTextField({top:height*
0.15,hintText:"\u4e00\u767a\u4e0d\u6b63\u89e3\u306e\u5358\u8a9e\u3092\u5165\u308c\u3066\u304f\u3060\u3055\u3044\n(\u4f8b:\u30b4\u30ea\u30e9\u3000\u30e9\u30c3\u30d1\u3000\u30d1\u30bb\u30ea)",width:Titanium.UI.FILL});a.add(b);a.add(c);return{view:a,choice1:b,choice2:c}}module.exports=ThreeChoiceView;
