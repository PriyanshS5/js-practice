// const score = 100;
// console.log(score);

// let newNumber = new Number(20);  // protoype values for numbers
// console.log(newNumber);

// console.log(newNumber.toString()); // converting it to string which helps it to access string functions which are available to perform at this object
// console.log(newNumber.toFixed(2)); //it gives a precise decimal value after it

// const other = 123.88;
// console.log(other.toPrecision(3)); // it gives a precise value of the given digits so be carefull

// const value = 100000000;
// console.log(value.toLocaleString('en-IN'));


// maths*****

console.log(Math);
console.log(Math.round(4.5));
console.log(Math.abs(-8));
console.log(Math.ceil(-2.9));
console.log(Math.floor(-9.1));
console.log(Math.min(88,1,0,-3,9));
console.log(Math.max(88,1,0,-3,9));

console.log(Math.random()); // random
console.log(Math.random()*10); // randome value between 0-9
console.log(Math.random()*10+1); //min 1 random value

const max = 20;
const min = 10;

console.log(Math.floor(Math.random()*(max-min+1))+min);