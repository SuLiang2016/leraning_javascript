// this 的严格模式


// 案例一

// // code start
// 'use strict';

// function bar () {
//     console.log(this.a);
// }

// var a = '123';

// bar();
// // code end

// 在 chrome 浏览器下运行

// 严格模式下
// 输出
// Uncaught TypeError: Cannot read property 'a' of undefined

// 非严格模式下
// 输出
// 123






// 案例二

// 代码一
// // code start
// function foo() {
//     "use strict";  
//     console.log('1', this.a);      //调用this.a的函数体是严格模式
// }
// var a = 2;
// foo();      // Uncaught TypeError: Cannot read property 'a' of undefined
// // code end
// 输出
// Uncaught TypeError: Cannot read property 'a' of undefined



// 代码二
// code start
function foo() {
    console.log('2', this.a);       //调用this.a的函数体是非严格模式
}
var a = 2;
(function(){
    "use strict";
    foo();      // 2  调用foo()的位置是严格模式
})();
// code end
// 输出
// 2



// 解析：
// （1）第一段代码，在foo()函数体内采用严格模式并使用了this.a，this会指向undefined；第二段代码foo()在严格模式下调用，this不会指向undefined
// （2）决定 this 绑定对象的并不是调用位置是否处于严格模式，而是函数体是否处于严格模式。如果函数体处于严格模式，this 会被绑定到 undefined，否则this 会被绑定到全局对象
