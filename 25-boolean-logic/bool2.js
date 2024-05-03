const x = 0;
if (x) {
  console.log("x contains a value");
}
if (!x) {
  console.log(" x contains *NO* value");
}

const name1 = "christopher";
if (name1 === "Christopher") {
  console.log("The values are the same");
} else {
  console.log("The values NOT are the same");
}

const status = 200;
if (status === 200) {
  console.log("OK");
} else if (status === 400 || status === 500) {
}

switch (status) {
  case 200:
    console.log("OK!");
    break;
  case 400:
  case 500:
    console.log("Error");
    break;
  default:
    console.log("Unknown value");
    break;
}
