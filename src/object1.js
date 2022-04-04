/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-array-constructor */
/* eslint-disable no-new-object */
const o = new Object();
const a = new Array();
const d = new Date();
// eslint-disable-next-line no-lone-blocks
const f1 = function () {
  console.log('The cow Jumped over the MOON');
}
console.log('Date = ' + d);
f1();
// -----------------------------
const o1 = Object.create({ x: 100, y: 200 });
console.log('x= ' + o1.x + ' y=' + o1.y);
console.log(o1);

const o2 = Object.create(null);
const o3 = Object.create(Object.prototype);
// const o3 =new Object();
// const o3 ={};
console.log(o2);
console.log(o3);
