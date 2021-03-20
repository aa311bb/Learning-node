var counter=function(arr){
return "一共有"+arr.length
}
var adder=function(a,b){
    return `你需要计算的两个值为:${a+b}`;
}
var pi=3.14;
// module.exports.counter=counter;
// module.exports.adder=adder;
// module.exports.pi=pi;
module.exports={
    counter:counter,
    adder,
    pi
}