/*
 * 
 * 
 * 
 * 
 * 
 * 
 */

exports.createCardViewWindow = function(title,row_infoJSON){

	var cards_texts =[title,'...'];

	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	var CardWindow = Titanium.UI.createWindow({
		backgroundImage :require('/util/getbackPathWithTime').getPath(),
		exitOnClose : false,
		fullscreen : true,
		navBarHidden : true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	
	var cardController = require('/ui/common/AddCardWindow/CardController').createCardController();
	
	var card1 = cardController.getTwinCards()[1];
	
	card1.text.setEditable(false);
	card1.center = {x:width *0.52,y:height * 0.48};
	
	CardWindow.add(card1);
	
	var card2 = cardController.getTwinCards()[0];
	
	card2.text.setEditable(false);
	card2.center = {x:width *0.48,y:height * 0.35};
	
	CardWindow.add(card2);
	
	var flip_button = Titanium.UI.createButton({
		backgroundImage : '/images/button/swap/swapButton.png',
		backgroundSelectedImage : '/images/button/swap/swapButton_Pressed.png',
		width:width * 0.2,
		height:width *0.2,
		center:{x:width *0.85,y:height *0.55}
		});
	flip_button.addEventListener('click',function(e){
		cardController.SwapCard();
		
	});
	CardWindow.add(flip_button);

	var under_UI_ImageView = Titanium.UI.createImageView({
		image : '/images/navibar/flow_under.png',
		width : Titanium.UI.FILL,
		height : height *0.6,

		top : height * 0.6

	});
	
	
	cardController.setCard1Texts(title);
		
	//cardController.setCardsTitle(['こんなことがあった！','コツはこんな感じ！']);
	
	require('/ACS/Confess/CardSystem/GetCard').getCard(row_infoJSON.cardID);
	
	Titanium.App.addEventListener('get_Cardinfo',function(info){
		cardController.setCard2Texts(info.card1_info);
		//controller.setCard2Texts(info.card2_info);
		
		cards_texts[1] = info.card1_info;
		
	});

	CardWindow.add(under_UI_ImageView);
	
	CardWindow.open();
	var social_button = Titanium.UI.createButton({
		title : '他のみんなにもにつぶやく',
		width : width * 0.6,
		height : 'auto',
		top : height * 0.83
	});
	
	social_button.addEventListener('click',function(e){
		var intent = Ti.Android.createIntent({
            action: Ti.Android.ACTION_SEND,
            type: 'text/plain',
            data:'xicolo_intent'
        });
        
        intent.putExtra(Titanium.Android.EXTRA_TEXT,'"'+cards_texts[0]+'"のコツは"'+cards_texts[1]+'"らしいよ！＃ひみつぶやき');
        intent.addCategory(Ti.Android.CATEGORY_DEFAULT);
        Ti.Android.currentActivity.startActivity(intent);
		
		Ti.Android.currentActivity.startActivityForResult(intent,function(e){
        				//alert('STUB::インテントが帰って来ました::'+JSON.stringify(e));
        });
	});
	
	CardWindow.add(social_button);
	
	var close_button = Titanium.UI.createButton({
		title : '閉じる',
		width : width * 0.6,
		height : 'auto',
		top : height * 0.92
	});

	close_button.addEventListener('click', function(e) {
		CardWindow.close();
		//delete win;
	});
	
	CardWindow.add(close_button);
	
	return CardWindow;
}
