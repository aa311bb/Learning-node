var fs=require('fs');

//读取文件流
var myReadStream=fs.createReadStream(__dirname+'/readMe.txt','utf8');

//写入文件流
var myWriteStream=fs.createWriteStream(__dirname+'/writeMe2.txt')

myReadStream.pipe(myWriteStream)//直接写入

// console.log(myReadStream);
// myReadStream.on('data',function(chunk){
//     times++;
//     console.log('=============正在读取数据=============')
//     // console.log(chunk)
//     myWriteStream.write(chunk) // 写入数据
// })


