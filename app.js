var http = require('http');
var final = require('./finalBoss');

http.createServer(function(req,res){
    res.writeHead(200);
    res.write(final.accountBalanceString() + final.randomDollar().toString()+ "\n");
    res.end();
}).listen(8000);
