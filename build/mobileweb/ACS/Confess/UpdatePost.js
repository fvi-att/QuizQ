exports.UpdatePost=function(c,d){var b=Titanium.UI.createActivityIndicator({bottom:10,height:100,width:100,message:"\u540d\u7121\u3057\u3055\u3093\u3068\u3057\u3066\u8fd4\u4fe1\u4e2d",font:{fontFamily:"Helvetica Neue",fontSize:15,fontWeight:"bold"}});b.show();require("ti.cloud").Posts.update({post_id:c,content:d},function(a){a.success?(a=a.posts[0],b.hide(),Titanium.UI.createNotification({duration:3E3,message:"\u30ec\u30b9\u3092\u6295\u7a3f\u3057\u307e\u3057\u305f\u3002"}).show(),Titanium.App.fireEvent("update_row",
{id:c,status:a.content})):(b.hide(),alert("\u6295\u7a3f\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3000\u3082\u3046\u4e00\u5ea6\u6295\u7a3f\u3057\u306a\u304a\u3057\u3066\u898b\u3066\u304f\u3060\u3055\u3044"))})};