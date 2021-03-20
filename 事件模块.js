//1.引入事件模块
var events=require('events');

//2.创建EventEmitter对象
var myEmitter =new events.EventEmitter();

//3.注册事件
myEmitter.on('someEvent',function(msg){
    // console.log(msg)
    //异步执行
    setImmediate(()=>{
        console.log(msg)
    })
});

//4.触发事件
myEmitter.emit('someEvent','实现事件并传递此参数到注册事件的回调函数中');

console.log(1)