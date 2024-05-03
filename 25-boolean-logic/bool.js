console.log("42" == 42); // checks for equality regardless of date type
console.log("42" === 42); // checks for equal values and date types

// != checks for non-equality regardless of data type
// !== checks for non-equal values and data types

const status = 200;
if (status === 200) {
  console.log("OK!");
} else if (status === 400) {
  console.log("Error!");
} else console.log("Unknown status");

const message = status === 200 ? "Ok" : "Error";
