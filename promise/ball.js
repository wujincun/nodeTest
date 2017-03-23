/**
 * Created by Administrator on 2017/3/23.
 */

var ball1 = document.querySelector('.ball1');
var ball2 = document.querySelector('.ball2');
var ball3 = document.querySelector('.ball3');
function animate(ball,distance,cb) {
    setTimeout(function () {
        var marginLeft=parseInt(ball.style.marginLeft,10);
        if(marginLeft === distance){
            cb && cb()
        }else{
            if(marginLeft < distance){
                marginLeft ++
            }else{
                marginLeft --
            }
            ball.style.marginLeft = marginLeft + 'px';
            animate(ball,distance,cb)
        }
    },13)
}
/*    animate(ball1,100,function () {
 animate(ball2,200,function () {
 animate(ball3,300,function () {
 animate(ball3,150,function () {
 animate(ball2,150,function () {
 animate(ball1,150,function () {

 })
 })
 })
 })
 })
 })*/
 var  Promise =require('bluebird');
function promiseAnimate(ball,distance) {
    return new Promise(function (resolve,reject) {
        function _animate() {
            setTimeout(function () {
                var marginLeft=parseInt(ball.style.marginLeft,10);
                if(marginLeft === distance){
                    resolve
                }else{
                    if(marginLeft < distance){
                        marginLeft ++
                    }else{
                        marginLeft --
                    }
                    ball.style.marginLeft = marginLeft + 'px';
                    _animate()
                }
            },13)
        }
        _animate()
    })
}
promiseAnimate(ball1,100)
    .then(function () {
        return promiseAnimate(ball2,200)
    })
    .then(function () {
        return promiseAnimate(ball3,300)
    })
    .then(function () {
        return promiseAnimate(ball3,150)
    })
    .then(function () {
        return promiseAnimate(ball2,150)
    })
    .then(function () {
        return promiseAnimate(ball1,150)
    });