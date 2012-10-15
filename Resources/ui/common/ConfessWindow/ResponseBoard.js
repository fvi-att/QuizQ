/*
 * created by fvi@
 * 
 * created @ 2012 09 11
 * 
 */


exports.openView = function(view,about){
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
		var back_temp_view = Titanium.UI.createView({
			backgroundColor:'black',
			width:Titanium.UI.FILL,
			height:Titanium.UI.FILL,
			opacity:0.95
		});
		
		back_temp_view.addEventListener('click',function(e){
			view.remove(back_temp_view);
			view.remove(old_paper);
		})
		
		view.add(back_temp_view);
		
		var old_paper = Titanium.UI.createView({
			backgroundImage:'/images/opening/old_paper.jpg',
			width:width * 0.8,
			height:height * 0.8,
			opaque:false,
			top:height * 0.1
		
		});
	var status_label = Titanium.UI.createLabel({
		text : 'by 名無しさん',
		color : 'black',
		font : {
			fontSize : width / 25
		},
		textAlign : 'center',
		top:old_paper.height *0.15,
		
		
	});
	old_paper.add(status_label);
	
	var title_label = Titanium.UI.createLabel({
		text : about.title,
		color : 'black',
		font : {
			fontSize : width / 20
		},
		textAlign : 'center',
		top:old_paper.height *0.25,
		
		
	});
	old_paper.add(title_label);
	
	var everyone_label = Titanium.UI.createLabel({
		text:'みんなのレス一欄',
		textAlign:'left',
		top:old_paper.height *0.38,
		color:'black',
				font : {
			fontSize : width / 30
		},
	})
	old_paper.add(everyone_label);
	var switch1 = Ti.UI.createSwitch({
		style : Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		title :'イイね！',
		value : false,

		color : 'black',

		top : old_paper.height *0.45,
		width : old_paper.width * 0.8,
		height : old_paper.height *0.1// necessary for textAlign to be effective
	});
	old_paper.add(switch1);
	var switch2 = Ti.UI.createSwitch({
		style : Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		title :'マズイね！',
		value : false,

		color : 'black',

		top : old_paper.height *0.55,
		width : old_paper.width * 0.8,
		height : old_paper.height *0.1// necessary for textAlign to be effective
	});
	old_paper.add(switch2);
	
	var switch3 = Ti.UI.createSwitch({
		style : Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		title :'あり得ない！',
		value : false,

		color : 'black',

		top : old_paper.height *0.65,
		width : old_paper.width * 0.8,
		height : old_paper.height *0.1// necessary for textAlign to be effective
	});
	old_paper.add(switch3);
	
	var add_button = Titanium.UI.createButton({
		title:'新しいレスを加える',
		width:old_paper.width * 0.7,
		height:old_paper.height *0.1,
		top:old_paper.height *0.75
	});
//	old_paper.add(add_button);
	
	add_button.addEventListener('click',function(e){
		   Titanium.UI.createNotification({
			duration : 3000,
			message : "もうしばらくするとつかえるようになるかも"
			}).show();
	})
		
		
		var tmp_closeButton = Titanium.UI.createButton({
			backgroundImage:'/images/button/OK/trans/button.png',
			backgroundSelectedImage:'/images/button/OK/trans/button_pressed.png',
			height:height* 0.1,
			width:width * 0.5,
			top:height * 0.7
		});
		old_paper.add(tmp_closeButton);
		
		
		tmp_closeButton.addEventListener('click',function(e){
			view.remove(back_temp_view);
			view.remove(old_paper);
			
			
			
			
			if(switch1.value)
				about.status.interest ++;
			if(switch2.value)
				about.status.bad ++;
			if(switch3.value)
				about.status.noway++;
				
		//	alert('uploading::'+JSON.stringify(about.status))
				
			//更新系の処理を書いておくこと
			require('/ACS/Confess/UpdatePost').UpdatePost(about.post_id,JSON.stringify(about.status))
		});
		
		old_paper.add(tmp_closeButton);
		
		var cancel_button = Titanium.UI.createButton({
			backgroundImage:'/images/cancel/cancel.png',
			width:width * 0.06,
			height:height*0.05,
			center:{x:width * 0.75,y:height *0.04}
		});
		
		cancel_button.addEventListener('click',function(e){
			view.remove(back_temp_view);
			view.remove(old_paper);			
		});
		
		old_paper.add(cancel_button);
		
		
		
		
		
		view.add(old_paper);
		
		return old_paper;
}
