const now = new Date();

const randomDate = new Date(2015, 3, 12, 6, 25, 58);

const win95Launch = new Date(1995, 7, 24);

console.log(randomDate);
console.log(win95Launch);

now.setFullYear(2024);
now.setMonth(3);
now.setDate(4);

now.setHours(4);
now.setMinutes(24);
now.setSeconds(46);

console.log(now);

console.log(now.getMonth());
console.log(now.getTime());
