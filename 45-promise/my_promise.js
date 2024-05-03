// 多个 await 同步执行，但是如果有多个 promise，最好使用 Promise.all
// 我这个 function 没有调用
async function f() {
  // 这样做会打破并行
  // const promiseA = await fetch("http://localhost:3000/api");
  // const promiseB = await fetch("http://localhost:3000/api");

  // 推荐做法
  const promiseA = fetch("http://localhost:3000/api");
  const promiseB = fetch("http://localhost:3000/api");
  const [a, b] = await Promise.all([promiseA, promiseB]);
}

function delay() {
  return new Promise((resolve) => setImmediate(resolve));
}

async function printHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello");
      resolve();
    }, 100);
  });
}

async function main() {
  printHello(); // 这将在背后运行
  for (let i = 0; i < 500000; i++) {
    await delay(); // 这允许处理其他事件，包括上面的 setTimeout
    console.log("World");
  }
}

main();
