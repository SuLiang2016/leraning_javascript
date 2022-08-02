// 函数中this的重定向

// 运行环境： chrome浏览器
// 说明，在箭头函数没有前，函数中的this指向给调用的对象


// 案例一

// // 纯粹的this指向
// let obj1 = {
//     name: 'xiao,ming',
//     age: '16',
//     speed: '10',
//     say: function () {
//         // console.log(this);
//         console.log(this.name);
//         return this;
//     },
//     run: function() {
//         // console.log(this);
//         console.log(this.speed);
//         return this;
//     }
// };

// console.log('obj1', obj1.say());
// // 输出
// // xiao,ming
// // obj1 {name: "xiao,ming", age: "16", speed: "10", say: ƒ, run: ƒ}

// // 由于这个特性，可以进行对 对象的链式调用(只需要将对象返回即可)

// console.log('obj1', obj1.say().run());
// // 输出
// // xiao,ming
// // 10
// // obj1 {name: "xiao,ming", age: "16", speed: "10", say: ƒ, run: ƒ}





// 案例二
// // 修改的this指向  - apply, bind, call
// let obj2 = {
//     name: 'obj2',
//     say: function() {
//         console.log(this.name, arguments);
//     }
// };

// let obj3 = { name: 'obj3' };
// let obj4 = { name: 'obj4' };
// let obj5 = { name: 'obj5' };

// obj2.say(); // obj2 Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
// obj2.say.apply(obj3, [1, 2]); // obj3 Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// // call
// obj2.say.call(obj3, 1, 2); // obj3 Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// obj2.say.call(obj4, [1, 2]); // obj4 Arguments [Array(2), callee: ƒ, Symbol(Symbol.iterator): ƒ]
// // bind 只是改变了指向，并没有调用当前函数，需要手动调用一下
// obj2.say.bind(obj5)(); // obj5 Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]

// // 小小扩展-类型判定-通用型

// Object.prototype.toString.call('');   // [object String]

// Object.prototype.toString.call(1);    // [object Number]

// Object.prototype.toString.call(true); // [object Boolean]

// Object.prototype.toString.call(Symbol()); //[object Symbol]

// Object.prototype.toString.call(undefined); // [object Undefined]

// Object.prototype.toString.call(null); // [object Null]

// Object.prototype.toString.call(new Function()); // [object Function]

// Object.prototype.toString.call(new Date()); // [object Date]

// Object.prototype.toString.call([]); // [object Array]

// Object.prototype.toString.call(new RegExp()); // [object RegExp]

// Object.prototype.toString.call(new Error()); // [object Error]

// Object.prototype.toString.call(document); // [object HTMLDocument]

// Object.prototype.toString.call(window); //[object Window]

// Object.prototype.toString.call(global); //[object global]




// 案例三
// 箭头函数的乱入
var msg2 = '666'; // let ， const 无变量提示，在这里用var的变量提升，让变量挂载到window 上
let obj6 = {
    msg: 'obj6',
    say: () => {
        console.log(this);
        console.log(this.msg);
        console.log(this.msg2);
    }
};

obj6.say();
// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// undefined

let obj7 = { msg: 'obj7' };
let obj8 = { msg: 'obj8' };
let obj9 = { msg: 'obj9' };

obj6.say.call(obj7);
// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// undefined
obj6.say.apply(obj8);
// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// undefined
obj6.say.bind(obj9)();
// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// undefined

// 结论： 箭头函数中的this，指向调用函数的上下文，无法通过修改this的指向
