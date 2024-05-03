// parseInt() parseFloat()
// string => number
// toString()

let num1 = "150";
console.log(parseInt("100"));
console.log(parseInt(num1));

let flo1 = "1.5";
console.log(parseFloat(flo1));
console.log(parseInt(`1${flo1}`));

console.log(parseInt("ABC")); // abc is not a number
console.log(parseInt("0xF")); // 0xF is a hexadecimal number

console.log((100).toString());
