/**
 * @author fvi@
 *
 * created @ 20121005
 *
 */
//		sql.execute('CREATE TABLE IF NOT EXISTS CONFESS(_ID INTEGER UNIQUE PRIMARY KEY AUTOINCREMENT,ID TEXT NOT NULL,TITLE TEXT NOT NULL,MESSAGE TEXT NOT NULL)');
exports.InsertPost = function(ID,TITLE, MESSAGE) {
	try {
		sql.execute('INSERT INTO CONFESS VALUES(NULL,?,?,?)', ID,TITLE, MESSAGE);
		return true;
	} catch(err) {
		alert('エラー：投稿できませんでした(500)');
		return false;
	}
}
exports.getPost = function() {
	try {
		var result = sql.execute('SELECT * FROM CONFESS');

		return result;
	} catch(err) {

		alert('データの参照に失敗しました::'+JSON.stringify(err));

		return null;
	}
}

exports.DeletePost = function(_id) {
	try {
		sql.execute('DELETE FROM CONFESS WHERE _ID = ?', _id);
		return true;
	} catch(err) {
		return false;
	}
}
