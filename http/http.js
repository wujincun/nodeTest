/**
 * Created by Administrator on 2017/3/22.
 */
var http = require('http');
http
    .createServer(function (req,res) {
        res.writeHead(200,{'Content-Type':'text/'});
        res.write('Hello Nodejs');
        res.end()
    })
    .listen(2015)