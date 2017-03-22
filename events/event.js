/**
 * Created by Administrator on 2017/3/22.
 */
var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();
life.setMaxListeners(11); //官方建议最大设置10个监听器，这里设置监听数量
//addEventListener

life.on('求安慰',water);
life.removeListener('求安慰',water);
life.on('求安慰',function (who) {
    console.log('给'+who+'2')
});
life.on('求安慰',function (who) {
    console.log('给'+who+'3')
});
life.on('求安慰',function (who) {
    console.log('给'+who+'4')
});
life.on('求安慰',function (who) {
    console.log('给'+who+'5')
});
life.on('求安慰',function (who) {
    console.log('给'+who+'6')
});
life.on('求安慰',function (who) {
    console.log('给'+who+'7')
});
life.on('求安慰',function (who) {
    console.log('给'+who+'8')
});
life.on('求安慰',function (who) {
    console.log('给'+who+'9')
});
life.on('求安慰',function (who) {
    console.log('给'+who+'10')
});
life.on('求安慰',function (who) {
    console.log('给'+who+'11')
});
life.on('求溺爱',function (who) {
    console.log('给'+who+'买衣服')
});
life.removeAllListeners('求安慰');
var a = life.emit('求安慰','汉子');
var b = life.emit('求溺爱','妹子');
/*
var c = life.emit('求玩','汉子and汉子');
console.log(a,b,c);*/

function water(who) {
    console.log('给'+who+'倒水')
}


console.log(life.listeners('求安慰').length);
console.log(EventEmitter.listenerCount(life,'求溺爱'));
