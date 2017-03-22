/**
 * Created by Administrator on 2017/3/22.
 */
function clickIt(e) {
    window.alert('Button is clicked')
}
var button = document.getElementById('#button');
button.addEventListener('click',clickIt);
//EventEmitter

//EventLoop