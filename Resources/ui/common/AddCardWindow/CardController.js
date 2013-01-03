/*
 *
 *
 *
 *
 *
 */

exports.createCardController = function() {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	//なんとなくオブジェクト指向
	var controller = function() {};
	
	
	var textData = ['',''];

	controller.card1 = require('/ui/common/AddCardWindow/ConfessCard').createCard('STUB');
	controller.card2 = require('/ui/common/AddCardWindow/ConfessCard').createCard('blue');
	
	controller.card1.isTopCard = true;

	controller.getTwinCards = function() {
		return [controller.card1, controller.card2];
	}
	
	controller.CommitTexts = function(){
		if(controller.card1.isTopCard){
			textData[0] = controller.card1.text.value;
		}else{
			textData[1] = controller.card1.text.value;
		}
	}
	
	controller.getTexts = function(){
	
		return textData;
	}
	
	controller.ChageSwapCardWithColor = function(){
	
		controller.CommitTexts();
		
		
		var card1 = controller.card1;
		var card2 = controller.card2;
		if(card1.isTopCard){
			card1.setBackgroundImage('/images/navibar/flow_under_blue.png');
			card2.setBackgroundImage('/images/navibar/flow_under.png');
			
			card1.text.setHintText('それは　すごいですね\n どんなふうに出来たか\nこっそり教えてよ！');
			
			textData[0] = card1.text.value;
			
			card1.text.value = textData[1];
			
			card1.isTopCard = false;
		}else{
			card2.setBackgroundImage('/images/navibar/flow_under_blue.png');
			card1.setBackgroundImage('/images/navibar/flow_under.png');
			
			card1.text.setHintText('どんなことができたの？\n(200字以内)');
			
			textData[1] = card1.text.value;
			
			card1.text.value =textData[0];
			
			card1.isTopCard = true;
		}
		
	}
	
	
	controller.SwapCard = function(){
	//alert('カードをスワップする'); カードをスワップするアニメーションを行う
	var card1 = controller.card1;
	var card1_center = card1.center;
	//値参照してる　らしい
	
	
	controller.ChageSwapCardWithColor();
	
	card1.animate({center:{x:-1 * width,y:card1_center.y},duration:200},function(){
		card1.animate({center:{x:card1_center.x,y:card1_center.y},duration:200});
	});

	var card2 = controller.card2;
	var card2_center = card2.center;
	card2.animate({center:{x:2 * width,y : card2_center.y},duration : 200},function(){
		card2.animate({center:{x:card2_center.x,y:card2_center.y},duration:200});
	});

}

return controller;
}
