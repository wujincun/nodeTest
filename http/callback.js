/**
 * Created by Administrator on 2017/3/22.
 */
function learn(something) {
    console.log(something)
}
function we(callback,something) {
    something += " is cool";
    callback(something)
}
we(learn, 'Nodejs');
we(function (something) {
    console.log(something)
},"Jade");