function ThreeChoiceView(){height=Ti.Platform.displayCaps.platformHeight;width=Ti.Platform.displayCaps.platformWidth;var b=Titanium.UI.createView({backgroundColor:"white",height:height*0.3,width:Titanium.UI.FILL,top:height*0.27}),c=Ti.UI.createPicker({top:height*0.1,height:height*0.1,width:width*0.4,left:width*0.6,custom_item:1}),a=[];a[0]=Ti.UI.createPickerRow({title:"1\u304c\u6b63\u89e3",custom_item:1});a[1]=Ti.UI.createPickerRow({title:"2\u304c\u6b63\u89e3",custom_item:2});a[2]=Ti.UI.createPickerRow({title:"3\u304c\u6b63\u89e3",
custom_item:3});c.add(a);c.addEventListener("change",function(a){c.custom_item=a.row.custom_item});var a=Titanium.UI.createTextField({top:0,left:width*0.05,hintText:"\u9078\u629e\u80a2\uff11",width:width/2}),d=Titanium.UI.createTextField({top:height*0.1,left:width*0.05,hintText:"\u9078\u629e\u80a22",width:width/2}),e=Titanium.UI.createTextField({top:height*0.2,left:width*0.05,hintText:"\u9078\u629e\u80a23",width:width/2});b.add(c);b.add(a);b.add(d);b.add(e);return{view:b,choice1:a,choice2:d,choice3:e,
picker:c}}module.exports=ThreeChoiceView;
