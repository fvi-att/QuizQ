/**
 * @author fvi
 * 
 * created at 20120429
 */
function Android_admob(x,y){
				Titanium.Admob = require('ti.admob');
				
				var stageHeight = Titanium.Platform.displayCaps.platformHeight;

				var adMobView = Titanium.Admob.createView({
					publisherId : 'a14f94057006a16',
					testing : false, // default is false
					top : y, //optional
					left : x, // optional
					right : 0, // optional
					bottom : 0, // optional
					adBackgroundColor : 'FF8800', // optional
					backgroundColorTop : '738000', //optional - Gradient background color at top
					borderColor : "#000000", // optional - Border color
					textColor : "#000000", // optional - Text color
					urlColor : "#00FF00", // optional - URL color
					linkColor : "#0000FF" //optional -  Link text color
				});
				
				
					adMobView.setLeft(x);

				//listener for adReceived
				adMobView.addEventListener(Ti.Admob.AD_RECEIVED, function() {
					//alert("ad received:" + adMobView.top);
				
				});

				//listener for adNotReceived
				adMobView.addEventListener(Ti.Admob.AD_NOT_RECEIVED, function() {
					//alert("ad NOT received");
					//Ti.API.info("ad NOT received");
				});
				// 広告描画
				return adMobView;
				//admob end
}

module.exports = Android_admob;
