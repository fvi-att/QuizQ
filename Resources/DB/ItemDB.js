/*
 * created @ 20121001
 *
 * created by fvi@
 *
 *
 *created @ 20121001
 */

exports.getItems = function(id) {
	try {
		var sql = require('/DB/SQL').getDB();
		if (!id) {
			var result = sql.execute('SELECT * FROM ITEMS WHERE _ID = ?', id)
		} else {
			var result = sql.execute('SELECT * FROM ITEMS');
		}
	} catch(err) {
		alert('err:' + err.message);
		return false;
	}
}
exports.getItemsStauts = function(id) {
	try {
		var sql = require('/DB/SQL').getDB();
		if (!id) {
			var result = sql.execute('SELECT STATUS FROM ITEMS WHERE _ID = ?', id)
		} else {
			var result = sql.execute('SELECT STATUS FROM ITEMS');
		}
	} catch(err) {
		alert('err:' + err.message);
		return false;
	}
}

exports.AddItems = function(name, id, status) {
	var sql = require('/DB/SQL').getDB();
	if (!name)
		return false;
	if (!id)
		return false;
	if (!status)
		return false;

	try {
		sql.execute('INSERT INTO ITEMS VALUES(NULL,?,?,?)', name, id, status);
		alert('アイテム追加しました')
	} catch(err) {
		alert('エラー::アイテムに関するデータベースにアクセス出来ませんでした');
		return false;
	}
		return true;

}

exports.DeleteItem = function(_id) {
	try {
		sql.execute('DELETE FROM ITEMS WHERE _ID = ?', _id);
		return true;
	} catch(err) {
		return false;
	}
}