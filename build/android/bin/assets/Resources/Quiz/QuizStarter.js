exports.QuizDownLoadStart=function(d){var b;d.type=="example"&&(b=9999);var e=Titanium.UI.createActivityIndicator({bottom:10,height:100,width:100,message:"now Loading",font:{fontFamily:"Helvetica Neue",fontSize:15,fontWeight:"bold"}});e.show();require("ti.cloud").Objects.query({classname:"Quiz",where:{junelNum:b}},function(a){if(a.success){if(d.shuffle)for(var c=a.Quiz.length;c;){var b=Math.floor(Math.random()*c),f=a.Quiz[--c];a.Quiz[c]=a.Quiz[b];a.Quiz[b]=f}require("/ui/common/quiz/QuizWin").CreateQuizWin({quizs:a,
length:a.Quiz.length})}else alert("Error:\\n"+(a.error&&a.message||JSON.stringify(a)));e.hide()})};
