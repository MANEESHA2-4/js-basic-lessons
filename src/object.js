/* eslint-disable space-infix-ops */
/* eslint-disable dot-notation */
/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-spacing */
/* eslint-disable indent */
/* eslint-disable key-spacing */
/* eslint-disable semi */
const person = {
    first : 'sowmya' ,
    last : 'kookie' ,
    age : 22
};
console.log(person.first);
console.log(person.last);
console.log(person.age);
person.first = 'tom';
person.last = 'jerry';
console.log(person.first);
console.log(person.last);
person.last = null;
console.log(person.last);

// eslint-disable-next-line no-multiple-empty-lines

const empty = {};
const point = { x : 10, y: 50 };
const point2 = { x: point.x, y:point.y + 1 };
const book = {
    'main title': 'java script', // property names include space
    'sub-title':'guide to java script for beginners', 
    'for' : 'students', // reserved keyword
    author: {
        first: 'maneesha',
        last: 'kookie'
    }
};
console.log(book['main title']);
console.log(book['sub-title']);
console.log(book['for']);
console.log(book.author.first);
console.log(book.author.last);
// console.log(book[book.sub-title]);
console.log(book.for);
