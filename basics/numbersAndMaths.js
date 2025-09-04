const score = 100;
console.log(score);

let newNumber = new Number(20);  // protoype values for numbers
console.log(newNumber);

console.log(newNumber.toString()); // converting it to string which helps it to access string functions which are available to perform at this object
console.log(newNumber.toFixed(2)); //it gives a precise decimal value after it

const other = 123.88;
console.log(other.toPrecision(3)); // it gives a precise value of the given digits so be carefull