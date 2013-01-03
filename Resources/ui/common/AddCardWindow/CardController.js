/*
 *
 *
 *
 *
 *
 */

exports.createCardController = function() {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var controller = function() {
	};

	controller.card1 = require('/ui/common/AddCardWindow/ConfessCard').createCard('STUB');
	controller.card2 = require('/ui/common/AddCardWindow/ConfessCard').createCard('blue');

	controller.getTwinCards = function() {
		return [controller.card1, controller.card2];
	}
	controller.SwapCard = function(){
	//alert('カードをスワップする'); カードをスワップするアニメーションを行う
	var card1 = controller.card1;
	var card1_center = card1.center;
	//値参照　らしい
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
