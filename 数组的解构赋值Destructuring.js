/**
 * Created by zhaoxiaobing on 2016/10/28.
 */

/**
 * 解构只能用于数组或对象
 * 解构赋值允许指定默认值
 * 解构赋值不仅适用于var命令, 也适用于let和const命令
 * 解构不仅可以用于数组, 还可以用于对象
 */

var [a, b, c] = [1, 2, 3];
var [a, b, c] = [1, 2, 3];

console.log(a, b, c); //1 2 3

var [d, e, f] = ['xiao', 'bing'];
console.log(d, e, f); //xiao bing undefined

var [g, h] = ['ed6', '123','345'];
console.log(g); //ed6
console.log(h); //123

var [foo1] = [];
console.log(foo1); //undefined

var [foo3] = 'Hello';
console.log(foo3); // H

var [foo0 = true,foo8 = false,foo9 = undefined] = [1]; //设置默认值
console.log(foo0,foo8,foo9); //1 false undefined

var {foo, bar, me} = {bar: 'bbb', foo: 'aaa'};
console.log(foo, bar, me); //aaa bbb undefined

var x;
({x} = {x: 1});
console.log(x); // 1

var [foo2] = 1; //undefined is not a function
console.log(foo2); //undefined

var [foo4] = false; //undefined is not a function
console.log(foo4); //undefined

var [foo5] = NaN; //undefined is not a function
console.log(foo5); //undefined

var [foo6] = undefined; //undefined is not a function
console.log(foo6); //undefined

var [foo7] = undefined; //undefined is not a function
console.log(foo7); //undefined

