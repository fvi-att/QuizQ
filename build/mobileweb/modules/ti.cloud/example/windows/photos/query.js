windowFunctions["Query Photo"]=function(){var b=createWindow(),e=addBackButton(b),c=Ti.UI.createTableView({backgroundColor:"#fff",top:e+u,bottom:0,data:[{title:"Loading, please wait..."}]});c.addEventListener("click",function(a){a.row.id&&handleOpenWindow({target:"Show Photo",id:a.row.id})});b.add(c);b.addEventListener("open",function(){Cloud.Photos.query(function(a){if(a.success)if(0==a.photos.length)c.setData([{title:"No Results!"}]);else{for(var b=[],d=0,e=a.photos.length;d<e;d++)b.push(Ti.UI.createTableViewRow({title:a.photos[d].filename,
id:a.photos[d].id}));c.setData(b)}else error(a)})});b.open()};