/**
 * Created by Administrator on 2017/3/23.
 */
var http = require('http');
var fs = require('fs');
request = require('request');
http.createServer(function (req,res) {
    /*fs.readFile('./buffer/logo.png',function (err,data) {
        if(err){
            res.end('file not exist')
        }else{
            res.writeHeader(200,{'Context-type':'text/'})
            res.end(data)
        }
    })*/
    //fs.createReadStream('../buffer/logo.png').pipe(res)
    request('http://www.imooc.com/static/img/index/logo.png?t=1.1').pipe(res);
//pipe会自动监听data和end事件，每一小段数据会源源不断发送到客户端，pipe还会控制后端压力
}).listen(8090);