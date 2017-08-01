/**
 * Created by dllo on 17/8/1.
 */
//foreach是array新方法中的最基本的一个,就是遍历,循环
var arr = [1,2,3,4,5]
arr.forEach(function (value,index,array) {
    // console.log(value)
    // console.log(index)
    // console.log(array)
});
//foreach 方法中的function回调支持3个参数,第一个是遍历的数组的内容;
//第二个是对应的数组索引,第三个是数组本身


//map是指映射[].map(),基本用法跟foreach方法类似
arr.map(function (value,index,array) {
    // console.log(value)
    // console.log(index)
    // console.log(array)
})

var array = [];
array = arr.map(function (item) {
    //callback回调函数需要有return,如果没有,数组映射成了undefined
    return item * item
})

console.log(array)

//filter 过滤筛选之意
array = arr.filter(function (item) {
    return item > 3;
})
// console.log(array)

//some,只有有一个满足条件即可,返回真,退出循环
array = arr.some(function (item) {
    return item > 3
})
// console.log(array)

array = arr.every(function (item) {
    return item > 3
})

// console.log(array)

// indexOf
//返回整数返回值,如果没有匹配,返回-1,fromIndex可选,表示从这个位置开始搜索,若缺省或格式不合要求
//使用默认值0,
var data = [2,5,8,9,6,5,2,3]
console.log(data.indexOf(5)) // 数组中有此元素,返回1
console.log(data.indexOf(4))//数组中没有此元素,返回-1

//lastIndexOf 方法与indexOf 方法类似
//只是lastindexOf 是从字符串的末尾开始查找,而不是从头,
//还有一个不同的是fromIndexOf 的默认是array.length而不是0

console.log(data.lastIndexOf(2))


//迭代,之前值与当前值相加,如果没有给初始值,初始值是数组第一个数
var sum = [1,2,3,4,5]
var num = 0;
num = sum.reduce(function (pre,cur) {
    return pre + cur;
},10)
console.log(num);//结果是15,如果给初始值10,结果是25

//reduceRight
//与reduce用法一样,不过是从数组的末尾开始运行
var sum = [1,2,3,4,5]
var num = 0;
num = sum.reduceRight(function (pre,cur) {
    return pre + cur
},10);
console.log(num);



