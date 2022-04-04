/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-undef */
/* eslint-disable space-in-parens */
/* eslint-disable quotes */
/* eslint-disable semi */
const age = 100;
const money = 1000.50;
console.log(typeof age);
console.log(typeof money);

console.log("10" - "5");

// math helper methods;

console.log( Math.round(2.5));
console.log( Math.floor(2.4));
console.log( Math.ceil(2.4));
console.log( Math.random());

const sweets = 20;
// eslint-disable-next-line no-unused-vars
const kids = 3;
const eachKidGets = Math.floor(sweets);
console.log(eachKidGets);
const leftsweets = sweets % kids;
console.log(leftsweets);

// eslint-disable-next-line prefer-const
let x = 2 ** 3;
console.log(x);

x = Math.pow(2, 3);
console.log(x);

console.log( 0.1 + 0.2 );

console.log(typeof Infinity);
console.log(typeof -Infinity);

// console.log(typeof Nan);
// eslint-disable-next-line no-multiple-empty-lines

console.log(typeof NaN);

let y = 100;
let result = Number.isInteger(y);
console.log(`Is y a number:${result}`);

let z = "abcd";
result = Number.isInteger(z);
console.log(`Is z a number:${result}`);
result = (typeof z === 'string');
console.log(`Is z a String:${result}`);
let flag = true;
result = (typeof flag === 'boolean')
console.log(`is flag a boolean: ${result}`);
let nos = [1, 2, 3, 4, 5];
result = (typeof nos === 'object');
console.log(`is nos an object: ${result}`);
