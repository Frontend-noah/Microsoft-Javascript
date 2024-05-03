// Async/Await => make async code look like sync code

// function promiseTimeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function simulateLongOperation() {
//   await promiseTimeout(1000);
//   return 42; // equal to Promise.resolve(42)
// }

// async function run() {
//   const answer = await simulateLongOperation();
//   console.log(answer);
// }

// run();

function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function run() {
  console.log("Start!!");
  promiseTimeout(2000); // 加了 await 就是同步
  console.log("Stop!!");
}

run();
