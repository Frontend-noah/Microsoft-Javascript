// while
// for
// for ... of

const names = ["Justin", "Sarah", "Christopher"];
let index = 0;
while (index < names.length) {
  const name = names[index];
  console.log(name);
  index++;
}

console.log("**********");

for (let name of names) {
    console.log(name);
}