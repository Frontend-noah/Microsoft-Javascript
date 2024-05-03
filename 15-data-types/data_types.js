// Simple type system
// Number(float), String, Boolean, Date, Function, Array and Object

// Special types
// NaN, null, undefined

// Checking type
// typeof operator => returns a string of the dat type primitive
// instanceof operator => returns a boolean of if a value matches the data types

let a = 1; // number
let b = "2"; // string
let c = false; // boolean
let d = new Date(); // object
let e = function () {}; // function
let f = []; // object
let g = {}; // object
let h = NaN; // number
let i = null; // object
let j = undefined; // undefined
console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // boolean
console.log(typeof d); // object
console.log(typeof e); // function
console.log(typeof f); // object
console.log(typeof g); // object
console.log(typeof h); // number
console.log(typeof i); // object
console.log(typeof j); // undefined

// types can change
console.log("************types can change**************");
let x = "something";
console.log(typeof x); // string
x = 1;
console.log(typeof x); // number
x = 1 + "hello"; // is x a string or number?
console.log(typeof x); // string

// == and ===
// 建议在 javascript 中使用 ===
"1" == 1; // true，字符串 '1' 被转换为数字 1
0 == false; // true，数字 0 和布尔值 false 都可视为等同

"1" === 1; // false，因为它们的类型不同（字符串和数字）
0 === false; // false，同样因为类型不同（数字和布尔值）
