windowFunctions["Select Users for ACL"]=function(f){function i(){Cloud.Users.query(function(a){if(a.success)if(0==a.users.length)d.setData([{title:"No Users!"}]);else{var b=[];"undefined"!=typeof c.publicAccess&&b.push({title:"<Public Access>",id:"publicAccess",hasCheck:c.publicAccess||!1});for(var g=0,f=a.users.length;g<f;g++){var e=a.users[g],h=Ti.UI.createTableViewRow({title:e.first_name+" "+e.last_name,id:e.id});h.hasCheck=-1!=c.ids.indexOf(e.id);b.push(h)}d.setData(b)}else d.setData([{title:a.error&&
a.message||a}]),error(a)})}var b=createWindow(),j=addBackButton(b),c=f.access,d=Ti.UI.createTableView({backgroundColor:"#fff",top:j+u,bottom:0,data:[{title:"Loading, please wait..."}]});d.addEventListener("click",function(a){a.row.id&&(a.row.hasCheck=!a.row.hasCheck,"publicAccess"===a.row.id?c.publicAccess=a.row.hasCheck:a.row.hasCheck?c.ids.push(a.row.id):c.ids.splice(c.ids.indexOf(a.row.id),1))});b.add(d);b.addEventListener("open",function(){i()});b.open()};