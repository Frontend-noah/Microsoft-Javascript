// Think of a simple JavaScript object with data(property values)
const book = new Object({
  title: "1984",
  author: "George Orwell",
});

console.log("\n -----------");
console.log(typeof book);
console.log(book);
const myBooks = [
  new Object({ title: "1984", author: "george orwell" }),
  new Object({
    title: "Becoming",
    author: "Noah",
  }),
  new Object({
    title: "Snow Crash",
  }),
];
console.log("\n -----------");
console.log(typeof myBooks);
console.log(myBooks);

// JSON.stringify() - object input
console.log("\n -----------");
let bookJSON = JSON.stringify(book);
console.log(bookJSON);

// JSON.stringify - collection input
console.log("\n -----------");
let myBooksJSON = JSON.stringify(myBooks);
console.log(myBooksJSON);

// JSON.parse()_ - string input
let data = bookJSON;
let parsed = JSON.parse(data);
console.log("\n -----------");
console.log(parsed);
console.log(Array.isArray(parsed));
console.log("Num items: " + parsed.length);

// JSON.parse() - string input
data = myBooksJSON;
parsed = JSON.parse(data);
console.log("\n -----------");
console.log(parsed);
console.log(Array.isArray(parsed));
console.log("Num items: " + parsed.length);
console.log("Author of 2nd book: " + parsed[1].author);

if (parsed.length === undefined) {
}
