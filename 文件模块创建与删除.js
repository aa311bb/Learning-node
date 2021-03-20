 // 1.引入文件系统模块
 var fs=require('fs');

 //2.使用模块对象调用方法
 //删除文件
//  fs.unlink('writeMe2.txt',function(err){
//      if(err) throw err;
//      console.log("文件删除成功")
//  })

 //创建文件夹 同步
//  fs.mkdirSync('stuff')

 //删除文件夹 同步
//  fs.rmdirSync('stuff')

//异步创建文件夹
// fs.mkdir('stuff',function(){
//     fs.readFile('readMe.txt','utf8',function(err,data){
//         if(err) throw err;
//         fs.writeFile('./stuff/writeMe.txt',data,function(){})
//     })
// })

//  异步删除文件夹（如果文件夹里有文件会报错）
//1.先删除文件夹中的文件  2.再删除外部的文件夹
fs.unlink('./stuff/writeMe.txt',function(){
    fs.rmdir('stuff',function(err){
        if(err) throw err;
        console.log("文件夹删除成功")
    })
})
