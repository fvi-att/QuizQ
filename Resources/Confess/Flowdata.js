/*
 * created by fvi@
 * 
 * 
 * created @ 2012 11 28

 * 
 */

exports.createDataObject = function(data){
	var obj = function(){}
	
	obj.data = data;
	
	//1つのセクションは10件のデータを保有する
	obj.numSectionhas = 10;
	
	obj.dataCur = null;
	
	
	obj.getDataCursor = function(){
		return obj.dataCur;
		
	}
	
	obj.getAllData = function(){
		
		dataCur = [0,obj.data.length]
		return obj.data;
		
	}
	
	obj.getData = function(start_point,end_point){
		try{
			obj.dataCur = [start_point,end_point]
			return obj.data.slice(start_point,end_point);
			
		}catch(err){
			alert('エラーが発生しました。正しくデータを取得できませんでした')
			obj.dataCur = null;
			return null;
		}
	}
	
	obj.getSection = function(section_num){
		try{
			var cur = section_num * obj.numSectionhas
			
			obj.dataCur = [cur,cur+obj.numSectionhas]
			
			return obj.data.slice(cur,cur+obj.numSectionhas)
			
		}catch(err){
			alert('エラーが発生しました。正しくデータを取得できませんでした')
			obj.dataCur = null;
			return null;
		}
	}

	return obj;
	
}
