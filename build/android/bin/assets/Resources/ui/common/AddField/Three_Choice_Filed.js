/**
 * @author fvi@
 * 
 * created @ 2012 08 16
 * 
 */
function ThreeChoiceView() {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	var view = Titanium.UI.createView({
		backgroundColor:'white',
		height:height *0.3,
		width:Titanium.UI.FILL
	})
	var textArea1 = Titanium.UI.createTextField({
		top:0,
		hintText:'選択肢１',
		width:Titanium.UI.FILL
	});
	var textArea2 = Titanium.UI.createTextField({
		top:height*0.1,
		hintText:'選択肢2',
		width:Titanium.UI.FILL
	});
	var textArea3 = Titanium.UI.createTextField({
		top:height*0.2,
		hintText:'選択肢3',
		width:Titanium.UI.FILL
	});
	
	view.add(textArea1);
	view.add(textArea1);
	view.add(textArea1);
	
	return {view:view,choice1:textArea1.value,choice2:textArea2.value,choice3:textArea3.value};
	
	
	
	
	
	
}
module.exports = ThreeChoiceView;
