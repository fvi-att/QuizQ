/**
 * @author fvi@
 *
 * created @ 20121005
 *
 */
//		sql.execute('CREATE TABLE IF NOT EXISTS CONFESS(_ID INTEGER UNIQUE PRIMARY KEY AUTOINCREMENT,ID TEXT NOT NULL,TITLE TEXT NOT NULL,MESSAGE TEXT NOT NULL)');
exports.InsertPost = function(ID,TITLE, MESSAGE) {
	try {
		var sql =require('/DB/SQL').getDB();
		sql.execute('INSERT INTO CONFESS VALUES(NULL,?,?,?)', ID,TITLE, MESSAGE);
		return true;
	} catch(err) {
		alert('エラー：投稿できませんでした(500)');
		return false;
	}
}
exports.getPost = function(where) {
	try {
		var sql =require('/DB/SQL').getDB();
		var result;
		if(!where){
			result = sql.execute('SELECT * FROM CONFESS');
		}else{
			result = sql.execute('SELECT * FROM CONFESS WHERE ID =?',where);
		}

		return result;
	} catch(err) {

		alert('データの参照に失敗しました::'+JSON.stringify(err));

		return null;
	}
}

exports.DeletePost = function(_id) {
	try {
		var sql =require('/DB/SQL').getDB();
		sql.execute('DELETE FROM CONFESS WHERE _ID = ?', _id);
		return true;
	} catch(err) {
		return false;
	}
}
