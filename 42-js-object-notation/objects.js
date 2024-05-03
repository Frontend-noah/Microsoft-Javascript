const book = {
  title: "1984",
  author: "George Orwell",
  isAvailable: false,

  checkIn: function () {
    this.isAvailable = true;
  },
  checkOut: function () {
    this.isAvailable = false;
  },
};
book.title = "123";
book["title"];
console.log(book);

// console.log("\n -----------");

const book1 = new Object();
console.log("\n--- Define book1");
console.log("Book1 type:", typeof book1);
console.log("Book1 value:\n", book1);

const data = {
  title: "1984",
  author: "George Orwell",
};
const book2 = new Object(data);
console.log("\n--- Define book2");
console.log("Book2 type:", typeof book2);
console.log("Book2 value:\n", book2);

const dataFunc = {
  title: "1984",
  author: "George Orwell",
  isAvailable: true,
  checkIn: function () {
    this.isAvailable = true;
  },
  checkOut: function () {
    this.isAvailable = false;
  },
};
const book3 = new Object(dataFunc);
console.log("\n--- Define book3 with data and functions");
console.log("Book3 type:", typeof book3);
console.log("Book3 value:\n", book3);

// 可以看成是 hashMap

const bookObj = {
  checkIn: function () {
    return this;
  },
};

console.log("\n\nthis is: ", bookObj.checkIn());
console.log(bookObj.checkIn() === globalThis);

function anotherCheckIn() {
  return this;
}

console.log("\n\n this is: ", anotherCheckIn);
console.log(anotherCheckIn() === globalThis);

// global this