//1.引入文件系统模块
var fs=require('fs');

//2.通过对象调用方法
// var readMe=fs.readFileSync('readMe.txt','utf8'); //同步读取
// console.log(readMe)

// fs.writeFileSync('writeMe.txt',readMe); //同步写入

//异步读取文件
fs.readFile('readMe.txt','utf8',function(err,data){
    if(err) throw err;
    console.log(data)

    //异步写入文件
    fs.writeFile('writeMe2.txt',data,function(){});
    
})
