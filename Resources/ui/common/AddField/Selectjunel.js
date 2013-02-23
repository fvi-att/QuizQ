/*
 * created by fvi@
 *
 * created @ 2012 09 11
 *
 */

exports.openView = function(view) {
	
	var junel = 'ひとりごと';
	
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var back_temp_view = Titanium.UI.createView({
		backgroundColor : 'black',
		width : Titanium.UI.FILL,
		height : Titanium.UI.FILL,
		opacity : 0.95
	});

	back_temp_view.addEventListener('click', function(e) {
		view.remove(back_temp_view);
		view.remove(old_paper);
	})

	view.add(back_temp_view);

	var old_paper = Titanium.UI.createView({
		backgroundImage : '/images/opening/old_paper.jpg',
		width : width * 0.8,
		height : height * 0.8,
		opaque : false,
		top : height * 0.1

	});
	
	var label = Titanium.UI.createLabel({
		text:'ジャンルを選んでください',
		color:'black',
		width:old_paper.width * 0.9,
		top:old_paper.height * 0.1,
		textAlign:'center'
	});
	old_paper.add(label);

	var ok_button = Titanium.UI.createButton({
		backgroundImage : '/images/button/OK/trans/button.png',
		backgroundSelectedImage : '/images/button/OK/trans/button_pressed.png',
		height : height * 0.1,
		width : width * 0.5,
		top : height * 0.7
	});
	old_paper.add(ok_button);



	old_paper.add(ok_button);

	var cancel_button = Titanium.UI.createButton({
		backgroundImage : '/images/cancel/cancel.png',
		width : width * 0.06,
		height : height * 0.05,
		center : {
			x : width * 0.75,
			y : height * 0.04
		}
	});



	old_paper.add(cancel_button);
	//ピッカーに関する処理
	var names = ['ひとりごと','買わなきゃよかった・・','やらなきゃよかった・・','言わなきゃよかった・・','しなければよかった・・'];


	var rows1 = [];
	for (var i = 0; i < names.length; i++) {
		rows1.push(Ti.UI.createPickerRow({
			title : names[i]
		}));
	}


	var column1 = Ti.UI.createPickerColumn({
		rows : rows1,
		width:width * 0.6,
		height:'auto',
		font : {
			fontSize : "25"
		}
	});

	var picker1 = Ti.UI.createPicker({
		useSpinner : true,
		visibleItems : 7,
		type : Ti.UI.PICKER_TYPE_PLAIN,
		columns : [column1]
	});
	



	old_paper.add(picker1);
	
	picker1.addEventListener('change',function(e){
		
		junel = e.row.title
	})
	ok_button.addEventListener('click', function(e) {
		
		view.remove(back_temp_view);
		view.remove(old_paper);
		
		Titanium.App.fireEvent('select_junel',{junel:junel})
		//alert('STUB::'+picker1.getSelectedRow(0).getTitle())
	});
	
	cancel_button.addEventListener('click', function(e) {
		view.remove(back_temp_view);
		view.remove(old_paper);
		
		//Titanium.App.fireEvent('select_junel',{junel:junel})
		//Titanium.App.fireEvent('select_junel',{junel:column1.getSelectedRow().getTitle()})
		//alert('STUB::'+picker1.getSelectedRow(0).getTitle())
	});


	view.add(old_paper);

	return old_paper;
}
