# Array 对象


#### concat() 
1. 该方法用于连接两个或多个数组。  
2. 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
3. 语法: arrayObject.concat(arrayX,arrayX,......,arrayX); arrayX	必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。

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
    arr.join();  //"George,John,Thomas"
    arr.join(".");  //"George.John.Thomas"
```


