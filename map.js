/**
 * Created by zhaoxiaobing on 2016/10/28.
 */

var map = new Map();

map.set('first', 'hello');
map.set('second', 'world');

for (let [key ,value] of map){
    console.log(key + " is " + value);
    // first is hello
    // second is world
}