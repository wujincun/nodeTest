/**
 * Created by Administrator on 2017/3/22.
 */
/*var pet = {
    words:"...",
    speak:function () {
        console.log(this.words);
        console.log(this == pet)
    }
};
pet.speak();*/
function pet(words) {
    this.words = words;
    console.log(this.words);
    console.log(this == global)
}
pet('...');