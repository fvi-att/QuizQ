define(["Ti/_/Evented","Ti/_/lang"],function(a,d){return d.setObject("Ti.Yahoo",a,{yql:function(a,c){require(["http://query.yahooapis.com/v1/public/yql?format=json&callback=define&q="+encodeURIComponent(a).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/,"%28").replace(/\)/,"%29")],function(b){var b=b||{},a=b.query&&b.query.results;require.is(c,"Function")&&c({success:!!a,data:a,message:b.error&&b.error.description})})}})});