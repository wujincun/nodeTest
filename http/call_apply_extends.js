
/**
 * Created by Administrator on 2017/3/22.
 */
function Pet(words){
    this.words = words;
    this.speak = function () {
        console.log(this.words)
    }
}
function Dog(words) {
    Pet.call(this,words)
}
var dog = new Dog('wang');
dog.speak();