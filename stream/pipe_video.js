/**
 * Created by Administrator on 2017/3/23.
 */
var fs = require('fs');
fs.createReadStream('m.mp4').pipe(fs.createWriteStream('1-pipe.mp4'))
/*
var readStream = fs.createReadStream('m.mp4');
var writeStream = fs.createWriteStream('1-stream.mp4');

readStream.on('data',function (chunk) {
    if(writeStream.write(chunk)===false){//判断数据还在缓存区，防止由于读写不同步导致的缓存爆仓
        console.log('still cached');
        readStream.pause()
    }
}).on('end',function () {
    writeStream.end()
});
writeStream.on('drain',function () {//数据消耗完，已写入目标
    console.log('data drains');
    readStream.resume()
});*/
