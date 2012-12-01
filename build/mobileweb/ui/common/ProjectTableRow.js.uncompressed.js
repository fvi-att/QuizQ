/**
 * @author fvi
 * create 2012 07 19
 *
 */

exports.createRowObject = function(image_path,title,side,id) {
	
	
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	var leftImagePath = '';
	

	if(side < 0)
		leftImagePath ='/images/result/cross2.png';
		
	if(side > 0)
		leftImagePath = '/images/result/circle2.png';
		
	if(side == 0)
		leftImagePath = '/images/result/clear1.png';
		
	
	if(!id)
		id='STUB';
		
	//titleの数で幅を大きくして行く
	var lf_count = title.split("\n").length - 1;
	var row = Titanium.UI.createTableViewRow({
//		leftImage:leftImagePath,
		backgroundImage:'/images/transparent.png',
		hasChild:true,
		height : height * 0.15 + height*0.05*lf_count,
		className : 'todo_row',
		id : id,
		
	});
	var row_height = row.getHeight();
	var row_width  = row.getWidth();
	
	var row_img = Titanium.UI.createImageView({
		image:image_path,
		height:row_height * 0.9,
		width:'auto',
		center:{x:width * 0.15,y:row_height/2}
	});
	//row.add(row_img);
	//画像貼り付けコード封印
	
	var label = Titanium.UI.createLabel({
		text:title,
		color:'black',
		font:{fontSize:width /20},
		textAlign:'center',
		top:height *0.12 + hasPhoto *height *0.7,
		left:width * 0.25
		
	});
	row.add(label);
	
	var arrow_path = '/images/Table/arrowUp1.png';
	if(side < 0)
		arrow_path = '/images/Table/arrowDown1.png';
		
	if(side == 0)
		arrow_path = '/images/Table/complete_stamp.gif'
		
	var arrow_img = Titanium.UI.createImageView({
		image:arrow_path,
		width:'auto',
		height:row_height * 0.9,
		right:0,
		//今回はここは隠蔽
		opacity:0
		
	});
	row.add(arrow_img);
	
	return {row:row,image:row_img,label:label,side_img:arrow_img};

}
