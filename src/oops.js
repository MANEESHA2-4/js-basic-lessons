/* eslint-disable prefer-const */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-array-constructor */
/* eslint-disable no-new-object */
/* eslint-disable semi */
const o = new Object();
const a = new Array();
const d = new Date();
const f1 = function() {
    console.log('the cow jumped over the Moon');
};
console.log("Date =" + d);
f1();

const o1 = Object.create({ x: 100, y: 200 });
console.log('x= ' + o1.x + 'y=' + o1.y);
console.log(o1);

const o2 = Object.create(null);
const o3 = Object.create(Object.prototype);
console.log(o2);
console.log(o3);


function getChild (parent) {
    if (parent == null) throw TypeError();
    return Object.create(parent);
}
let o4 = { x: "dont change this value" };
// console.log(o4.x);

let p = getChild(o4);
 // console.log(p);
/*
o4 = null;
p = getChild(o4);
console.log(p); */

// Object.prototype = 0;
// console.log(Object);

let o5 = {};
// console.log(o5);
o5.x = 100;
// console.log(o5);
p = getChild(o5);
// console.log(p);
p.y = 200;
let q = getChild(p);
q.z = 300;
// console.log(q);
console.log("q.x + q.y + q.z" + (q.x + q.y + q.z));
console.log("p.x + p.y + p.z" + (p.x + p.y + p.z));
console.log("p.x + p.y " + (p.x + p.y));
console.log("o5.x + o5.y " + (o5.x + o5.y));
console.log("o5.x" + o5.x);
