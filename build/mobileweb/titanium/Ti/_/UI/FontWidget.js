define("Ti/_/declare,Ti/_/dom,Ti/_/lang,Ti/_/ready,Ti/_/style,Ti/_/UI/Widget".split(","),function(g,h,j,k,d,l){var b;k(function(){b=h.create("p",{style:{position:"absolute",top:"-1000em",left:0,height:"auto",width:"auto"}},document.body)});return g("Ti._.UI.FontWidget",l,{constructor:function(){this._styleableDomNodes=[]},_setFont:function(a,c){if(a){var b=parseInt(a.fontSize);a.fontSize=isNaN(b)?void 0:b+"px";d.set(c,a)}else d.set(c,{fontFamily:"",fontSize:"",fontStyle:"",fontWeight:""})},_addStyleableDomNode:function(a){this._styleableDomNodes.push(a)},
_removeStyleableDomNode:function(a){a=this._styleableDomNodes.indexOf(a);-1!=a&&this._styleableDomNodes.splice(a,1)},_measureText:function(a,c,g){var e=window.getComputedStyle(c)||{},f=this.font||{},i=!a||""===a;b.innerHTML=i?"\u00c4y":a;this._setFont({fontFamily:f.fontFamily||e.fontFamily||"",fontSize:f.fontSize||e.fontSize||"",fontStyle:f.fontStyle||e.fontStyle||"",fontWeight:f.fontWeight||e.fontWeight||""},b);d.set(b,{whiteSpace:c.style.whiteSpace,width:h.unitize(j.val(g,"auto"))});return{width:i?
0:b.clientWidth+0.5,height:b.clientHeight}},properties:{color:{set:function(a){for(var b in this._styleableDomNodes)d.set(this._styleableDomNodes[b],"color",a);return a}},font:{set:function(a){for(var b in this._styleableDomNodes)this._setFont(a,this._styleableDomNodes[b]);return a}}}})});