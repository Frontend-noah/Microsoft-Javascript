// File I/O
// REST calls
// Database operations
// Complex computations

// Originally managed through callbacks
// function callback() {
//   console.log("timeout completed");
// }

// setTimeout(callback, 3000); // wait 3 seconds

function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

promiseTimeout(2000)
  .then(() => {
    console.log("done");
    return Promise.resolve(42);
  })
  .then((response) => {
    console.log(response);
    return Promise.reject("Error");
  })
  .catch((reason) => {
    // 上面返回 reject, 我这里就需要 catch 住
    console.log(reason + "!!!");
  });
