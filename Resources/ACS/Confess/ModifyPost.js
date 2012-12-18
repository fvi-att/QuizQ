/**
 * @author fvi
 * 
 * @created@ 20121218
 * 
 * 
 */
exports.ModifyPost = function(post_id,status,row_cnt){
	require('/ACS/Confess/UpdatePost').UpdatePost(post_id, JSON.stringify(status))
	Titanium.App.fireEvent('update_row',{status:status,row_cnt:row_cnt})

}
