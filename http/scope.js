/**
 * Created by Administrator on 2017/3/22.
 */
var globalVariable = 'this is global variable';
function globleFunction(){
    var localVariable = 'thid is local variable';
    console.log('Visit global/local variable');
    console.log(globalVariable);
    console.log(localVariable);
}
globleFunction();