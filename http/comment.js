/**
 * Created by Administrator on 2017/3/22.
 */
var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
    'content': '一起期待下一期',
    'cid': 348
});
var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/document',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'loginstate=1; apsid=BhYThhMTIzNTUwMGU3MDI2NDM4NjljY2M1N2UzYTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTk2OTc0NQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxNzY5NDUzNzc5QHFxLmNvbQAAAAAAAAAAAAAAAAAAAGM1MmYwYjUxNjVmNzMzMjhkNTNlMzU2Zjg3OGFkNDNhAUjCWAFIwlg%3DMj; last_login_username=1769453779%40qq.com; IMCDNS=0; PHPSESSID=hi499ai3gms06eaksd2nmlhad2; imooc_uuid=1e5867c3-5aaf-4f2f-9cc9-1f60d6f6763f; imooc_isnew=1; imooc_isnew_ct=1490167796; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1489738216,1490085210,1490086905,1490088422; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1490172147; cvde=58d227f49cd97-20',
        'Host': 'www.imooc.com',
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/video/8837',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
};
var req = http.request(options, function (res) {
    console.log('status:' + res.statusCode);
    console.log('headers:' + JSON.stringify(res.headers));
    //接受数据时触发
    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
    //数据接收完毕
    res.on('end', function () {
        console.log('ok')
    });
});
//请求异常
req.on('error', function (e) {
    console.log('Error:' + e.message)
});
//数据写入请求体
req.write(postData);
//完成请求
req.end();