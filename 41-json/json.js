// JSON.stringify() method converts a JavaScript object or value to a JSON string
// JSON.parse() method converts a JSON string to a JavaScript object
let bookObj = {
  title: "JavaScript",
  author: "Noah",
};
var json = JSON.stringify(bookObj);
console.log(json);

var book = JSON.parse(json);
console.log(book);
