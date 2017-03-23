/**
 * Created by Administrator on 2017/3/23.
 */
var fs = require('fs');
var source = fs.readFileSync('../buffer/logo.png');
fs.writeFileSync('steam_copy_logo.png',source);