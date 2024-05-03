// => fat arrow functions

const add = (a, b) => a + b;
console.log(add(1, 2));

const subtract = (a, b) => {
  const result = a - b;
  return result; // 如果不添加这个返回值, 他返回的是 undefined
};
console.log(subtract(5, 1));
