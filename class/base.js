/**
 * Created by zhaoxiaobing on 2016/10/31.
 */

//定义类
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return '(' + this.x + ',' + this.y +  ')';
    }
}

console.log(typeof Point); //function
console.log(Point === Point.prototype.constructor); //true

//上面代码表明，类的数据类型就是函数，类本身就指向构造函数。

class Bar{
    doStuff(){
        console.log('stuff');
    }
}
var b = new Bar();
b.doStuff(); //stuff
console.log(b.constructor === Bar.prototype.constructor); //true
