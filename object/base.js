/**
 * Created by zhaoxiaobing on 2016/10/31.
 */

var foo = 'bar';
var baz = {foo};

console.log(baz); // { foo: 'bar' }

//---------------------------------

function f(x, y) {
    return {x, y};
}

// 等同于
function f(x, y) {
    return {x: x, y: y};
}
console.log(f(1, 2)); // { x: 1, y: 2 }


//---------------------------------

var o = {
    name : 'xiaobing',
    method(){
        return this.name;
    }
};
// 等同于

var o = {
    name : 'xiaobing',
    method : function () {
        return this.name;
    }
};
console.log(o.method()); // xiaobing


//---------------------------------

