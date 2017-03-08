# Array 对象


### concat()
1. 该方法用于连接两个或多个数组。  
2. 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本.  

> 语法： arrayObject.concat(arrayX,arrayX,......,arrayX);  
> 参数： arrayX	必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。

```javascript
    var arr1 = [1,2,3];
    arr1.concat();  //[1, 2, 3]
    arr1.concat('');  //[1, 2, 3, '']
    arr1.concat(NaN, undefined, null, Math); //[1, 2, 3, NaN, undefined, null, Math]
    arr1.concat(Object,Array,String,Number,Boolean, RegExp, Date); // [1, 2, 3, function, function, function, function, function, function, function]
    arr1.concat(1);  //[1, 2, 3, 1]
    arr1.concat(1,[4,5],'6');  //[1, 2, 3, 1, 4, 5, '6']
```

#### join()

1. join() 方法用于把数组中的所有元素放入一个字符串。
2. 元素是通过指定的分隔符进行分隔的。
3. arrayObject.join(separator); separator	可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。

```javascript
    var arr1 = ['George','John','Thomas'];
    arr1.join();  //"George,John,Thomas"
    arr1.join(".");  //"George.John.Thomas"
    arr1.join("--");  //"George--John--Thomas"
```

#### pop()

1. pop() 方法用于删除并返回数组的最后一个元素。
2. arrayObject.pop(); 返回arrayObject 的最后一个元素。
3. pop() 方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。

```javascript
    var arr1 = ['George','John','Thomas'];
    arr1.pop(); //Thomas
    arr1.pop(); //John
    arr1.pop(); //George
    arr1.pop(); //undefined
    console.log(arr1); //[]
```

#### push()

1. push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
2. arrayObject.push(newelement1,newelement2,....,newelementX);newelement1	必需。要添加到数组的第一个元素。newelement2	可选。要添加到数组的第二个元素。newelementX	可选。可添加多个元素。

