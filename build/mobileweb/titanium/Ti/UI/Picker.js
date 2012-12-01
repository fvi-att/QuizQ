define("Ti/_/declare,Ti/_/event,Ti/UI/View,Ti/_/UI/Widget,Ti/UI,Ti/_/lang,Ti/_/dom,Ti/_/ready".split(","),function(j,m,n,i,d,f,g,o){var p=require.is,e=g.unitize(6),k={},l=require.on,r=j(i,{constructor:function(){function a(){c!==b.value&&(c=b.value,d.fireEvent("change",{value:b.valueAsDate}))}var b=this._input=g.create("input",{style:{left:e,top:e,right:e,bottom:e,position:"absolute"}},this.domNode),c,d=this;d._handles=[l(b,"ontouchstart"in window?"touchend":"click",a),l(b,"keyup",a)]},destroy:function(){m.off(this._handles);
i.prototype.destroy.apply(this,arguments)},_getContentSize:function(){return k[this.type]},properties:{type:{set:function(a){return this._input.type=a}},min:{set:function(a){this._input.min=f.val(a,"");return a}},max:{set:function(a){this._input.max=f.val(a,"");return a}},value:{set:function(a){try{this._input.valueAsDate=a}catch(b){}}}}});o(function(){var a=g.create("input",{style:{height:d.SIZE,width:d.SIZE}},document.body);["Date","Time","DateTime"].forEach(function(b){try{a.type=b}catch(c){}k[b]=
{width:a.clientWidth+12,height:a.clientHeight+12}});g.detach(a)});return j("Ti.UI.Picker",n,{constructor:function(){this.layout="constrainingHorizontal";this._columns=[];this._getBorderFromCSS()},_currentColumn:null,_addColumn:function(a){this._columns.push(a);a._parentPicker=this;for(var b=0,c=this._columns.length,q=this.width===d.SIZE?d.SIZE:100/c+"%",h=this.height===d.SIZE?d.SIZE:"100%";b<c;b++)a=this._columns[b],a.width=q,a.height=h,a._setCorners(0===b,b===c-1,e);a._pickerChangeEventListener=
f.hitch(this,function(a){a={column:a.column,columnIndex:this._columns.indexOf(a.column),row:a.row,rowIndex:a.rowIndex};if(this.type===d.PICKER_TYPE_PLAIN){var b=[],c;for(c in this._columns){var h=this._columns[c].selectedRow;h&&b.push(h.title)}a.selectedValue=b}this.fireEvent("change",a)});a.addEventListener("change",a._pickerChangeEventListener);this._add(a);this._publish(a)},_updateColumnHeights:function(){var a=0,b;for(b in this._columns)a=Math.max(a,this._columns[b]._getTallestRowHeight());for(b in this._columns)this._columns[b]._setTallestRowHeight(a)},
_defaultWidth:d.SIZE,_defaultHeight:d.SIZE,add:function(a){if(p(a,"Array"))for(var b in a)this.add(a[b]);else f.isDef(a.declaredClass)&&("Ti.UI.PickerColumn"===a.declaredClass?this._addColumn(a):"Ti.UI.PickerRow"===a.declaredClass&&(null===this._currentColumn&&this._addColumn(this._currentColumn=d.createPickerColumn()),this._currentColumn.addRow(a)))},destroy:function(){this._dateTimeInput&&this._dateTimeInput.destroy();i.prototype.destroy.apply(this,arguments)},getSelectedRow:function(a){return(a=
this._columns[a])&&a.selectedRow},setSelectedRow:function(a,b){var c=this._columns[a];c&&(c.selectedRow=c.rows[b])},properties:{columns:{get:function(){return this._columns},set:function(a){this._removeAllChildren();for(var b in this._columns){var c=this._columns[b];c.removeEventListener(c._pickerChangeEventListener);c._parentPicker=void 0}this._columns=[];a&&this.add(a)}},maxDate:{set:function(a){this._dateTimeInput&&(this._dateTimeInput.max=a);return a}},minDate:{set:function(a){this._dateTimeInput&&
(this._dateTimeInput.min=a);return a}},type:{set:function(a,b){var c=this;if(a!==b){this.columns=void 0;this._dateTimeInput=null;var e=function(a){a=c._dateTimeInput=new r({type:a,width:d.INHERIT,height:d.INHERIT});a.addEventListener("change",function(a){c.properties.__values__.value=a.value;c.fireEvent("change",a)});a.min=c.min;a.max=c.max;c._add(a)};switch(a){case d.PICKER_TYPE_DATE:e("Date");break;case d.PICKER_TYPE_TIME:e("Time");break;case d.PICKER_TYPE_DATE_AND_TIME:e("DateTime")}}return a},
value:d.PICKER_TYPE_PLAIN},value:{set:function(a){this._dateTimeInput&&(this._dateTimeInput.value=a);return a}}}})});