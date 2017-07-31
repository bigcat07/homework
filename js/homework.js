/**
 * Created by dllo on 17/7/31.
 */
var fs = require('fs')

//打开文件
fs.open('./1.txt','r',function (err,fd) {
    //如果有错误,结束执行
    if (err) {
        return;
    }
    console.log("文件打开成功")
})


//异步方式修改文件时间戳
//参数一,文件路径,参数二,修改时间,参数三,访问时间,参数四,回调函数
fs.utimes('./1.txt',new Date(),new Date(),function (err) {
    if (err) {
        throw err
    }
    console.log('成功!')
})



//监听
fs.watchFile('./1.txt',{interval:20},function (curr,prev) {
    if (Date.parse(prev.ctime) == 0) {
        console.log('文件被创建')
    }else if (Date.parse(curr.ctime) == 0) {
        console.log('文件被删除')
    }else if (Date.parse(curr.mtime) != Date.parse(prev.mtime)
    ) {
        console.log('文件有修改')
    }
})

//取消监听
var listener = function (curr,prev) {
    console.log('监听文件发生修改')
}
fs.watchFile('./1.txt',{interval:100},listener)
//取消监听文件
//当前程序结束退出
fs.unwatchFile('./1.txt',listener)

fs.link('./1.txt',function () {

})