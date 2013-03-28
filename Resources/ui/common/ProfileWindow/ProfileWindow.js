/*
 * created by fvi@
 *
 * created @ 20130324
 *
 */

exports.OpenProfileWindow = function() {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var win = require('/ui/common/CommonNavigationWindow').createCommonNavigationWindow()

	/*var template_controllerView = require('/ui/common/underbar/underbar').createBar(win)
	 win.add(template_controllerView)
	 */
	function createLabel(cnt){
		return Ti.UI.createLabel({
			text:'',
			color:'black',
			font : {
			fontSize : height/20
			},
			height:height * 0.1,
			width:width * 0.2,
			center:{x:width *0.85,y:height * (0.15 *(cnt+1) +0.1)}
		})
	}
	function createPicker(cnt){
		return Ti.UI.createPicker({
			height:height * 0.1,
			width:width * 0.5,
			center:{x:width *0.5,y:height * (0.15 *(cnt+2) +0.1)}
		})
	}
	
	var pickers = Array(3)
	var labels  = Array(4)
	
	for(pic_cnt = 0;pic_cnt < pickers.length;pic_cnt++){
		pickers[pic_cnt] = createPicker(pic_cnt)
		win.add(pickers[pic_cnt])
	}
	for(lbl_cnt =0;lbl_cnt < labels.length;lbl_cnt++){
		labels[lbl_cnt]	 = createLabel(lbl_cnt)
		win.add(labels[lbl_cnt])
	}
	labels[0].setText('で')
	labels[1].setText('の')
	labels[2].setText('で')
	labels[3].setText('の気分!')
	labels[3].setFont({fontSize:height/30})
	
	
	var data = Array(4)
	data[0]=Ti.UI.createPickerRow({title:'普通',custom_item:'b'});
	data[1]=Ti.UI.createPickerRow({title:'変態',custom_item:'s'});
	data[2]=Ti.UI.createPickerRow({title:'アホ',custom_item:'m'});
	data[3]=Ti.UI.createPickerRow({title:'伝説',custom_item:'g'});
	
	pickers[0].add(data)
	
	var data1 = Array(4)
	data1[0]=Ti.UI.createPickerRow({title:'名無しさん',custom_item:'b'});
	data1[1]=Ti.UI.createPickerRow({title:'ニート',custom_item:'s'});
	data1[2]=Ti.UI.createPickerRow({title:'JK',custom_item:'s'});
	data1[3]=Ti.UI.createPickerRow({title:'JC',custom_item:'s'});
	pickers[1].add(data1)
	
	var data2 = Array(6)
	data2[0]=Ti.UI.createPickerRow({title:'3歳',custom_item:'b'});
	data2[1]=Ti.UI.createPickerRow({title:'10歳',custom_item:'s'});
	data2[2]=Ti.UI.createPickerRow({title:'10代',custom_item:'s'});
	data2[3]=Ti.UI.createPickerRow({title:'18歳',custom_item:'s'});
	data2[4]=Ti.UI.createPickerRow({title:'おっさん',custom_item:'s'});
	data2[5]=Ti.UI.createPickerRow({title:'おばさん',custom_item:'s'});
	pickers[2].add(data2)
	
	
	var user_name=Titanium.App.Properties.getString('handlename');
	if(!user_name)
		user_name='名無しさん'
					
	var name_field = Titanium.UI.createTextField({
		height:height * 0.1,
		width:width * 0.5,
		hintText:user_name,
		center:{x:pickers[0].getCenter().x,y:labels[0].getCenter().y}
	})
	
	win.add(name_field)
	
	var iamLabel = Ti.UI.createLabel({
			text:'今日の私は!!',
			color:'black',
			font : {
			fontSize : height/15
			},
			textAlign:'center',
			height:height * 0.1,
			width:Ti.UI.FILL,
			center:{x:width *0.5,y:height * 0.13}
		})
	win.add(iamLabel)

	//なるべく最後に追加する
	var upperRibbonLabel = Titanium.UI.createImageView({
		image : '/images/navibar/profile/profileLabel.png',

		width : width / 2,
		height : 'auto',
		center : {
			x : width * 0.5,
			y : height * 0.06
		}
	})

	win.add(upperRibbonLabel)
	
	function CommitChange(){
		
		if(name_field.value){
				Titanium.App.Properties.setString('handlename',name_field.value);
				Titanium.App.fireEvent('change_handlename');
		}
		
		
		
	}
	
	var ok_button = Titanium.UI.createButton({
		title : 'これで行く',
		width : width * 0.6,
		height : 'auto',
		top : height * 0.8
	});
	

	ok_button.addEventListener('click', function(e) {
		CommitChange()
		win.close();
		//delete win;
	});
	
	win.add(ok_button);

	win.open()

	return win
}
