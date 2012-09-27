exports.getRandom=function(d){var a;a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");for(var b="",c=0;c<d;c++)b+=a[Math.floor(Math.random()*a.length)];return b};
