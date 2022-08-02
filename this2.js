// 1  this 的默认绑定值

console.log(this);
// window 对象  -- chrome 浏览器运行环境

// 函数内部的this是global；这里被改写成了{} 空对象  --  node运行环境
// node 运行环境

global.name = 'abc';
// console.log(global.name);

var a = 10;
c = '11';
this.temp = 'ccc';
console.log(this.a); // undefined
console.log(global.a); // undefined
console.log(a); // 10
console.log(c); // 11


console.log('this === global', this === global); // false
console.log('this === module.exports', this === module.exports); // true

console.log(this.temp); // ccc


function test() {
    console.log('func log', global.name); // abc
    console.log('func log this', this.name); // abc
    console.log('func log this === global', this === global); // true
    console.log('func log this === module.exports', this === module.exports); // false
}

test();
