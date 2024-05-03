// const value = "Reverse Me";
// let reversedValue = "";

// value.split("").forEach((char) => {
//     reversedValue = char + reversedValue;
// })

// console.log(reversedValue);

function reverseString(value) {
  let reversedValue = "";
  value.split("").forEach((char) => {
    reversedValue = char + reversedValue;
  });

  return reversedValue;
}

console.log(reverseString("Reverse Me"));
