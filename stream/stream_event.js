/**
 * Created by Administrator on 2017/3/23.
 */
var fs = require('fs');
var readStream = fs.createReadStream('m.mp4');
var n=0;
readStream
    .on('data',function (chunk) {//数据传送事件触发
        n++
        console.log('data emits');
        console.log(Buffer.isBuffer(chunk));
        //console.log(chunk.toString('utf8'));
        readStream.pause();
        console.log('data pause');
        setTimeout(function () {
            console.log('data pause end');
            readStream.resume()
        },1000)

    })
    .on('readable',function () {//文件可读
        console.log('data readable')
    })
    .on('end',function () {//数据传递完成，目标文件不在可写
        console.log(n);
        console.log('data ends')
    })
    .on('close',function () {//结束
        console.log('data close')
    })
    .on('error',function () {
        console.log('data error')
    })