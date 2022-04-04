/* eslint-disable no-tabs */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable no-var */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* var numbers = { x: 1, y: 2, z: 3 }
for (const i in numbers) {
  if (numbers.hasOwnProperty(i)) {
    console.log(i + '-' + number[i])
  }
} */
const o = { r: 10, s: 20, t: 30, u: 40, v: 50, w: 60, x: 70, y: 80, z: 90 }
// eslint-disable-next-line semi
console.log(o);

// eslint-disable-next-line no-unused-vars
function createcopy (o, p) {
  for (var prop in p) { // For all props in p.
    o[prop] = p[prop] // Add the property to o.
  }
  return o
}
// eslint-disable-next-line no-var
// var q = {};
// console.log(q);
// q = createcopy(q, o)
// console.log(q);
//
// eslint-disable-next-line no-unused-vars
function merge (o, p) {
    for (var prop in p) { // For all props in p.
        if (prop in o) continue
        o[prop] = p[prop] // Add the property to o.
}
	return o;
}
var r = { r: 10, s: 20, t: 30, u: 40, v: 50, w: 60, x: 70, y: 80, z: 90 };
        var s = { a: 100, b: 200, c: 300, d: 400, e: 500, w: 600, x: 700, y: 800, z: 900 };
        // eslint-disable-next-line no-unused-vars
        var t = merge(s, r);
        // var t = merge(r, s);
        // console.log(t);
        // --------------
/*
* For each property of p, delete the property with the same name from o.
* Return o.
*/
// eslint-disable-next-line no-unused-vars
/* function removeCommonItem (o, p) {
	for (var prop in p) { // For all props in p
		if (o.hasOwnProperty(prop)) {
		delete o[prop] // Delete from o (deleting a nonexistent prop is harmless)
		}
	}
	return o
}
*/
/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
// eslint-disable-next-line no-unused-vars
function removeUnCommonItem (o, p) {
	for (var prop in o) { // For all props in o
		if (!(prop in p)) delete o[prop] // Delete if not in p
	}
	return o;
}
// console.log(r);
// var t2 = removeCommonItem(r, s);
// console.log(t2);
// console.log(r);
// --------------------
function union (o, p) { return createcopy(createcopy({}, o), p) }
var t3 = union(r, s);
        console.log(t3);
        /*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
// eslint-disable-next-line no-unused-vars
function intersection (o, p) { return removeUnCommonItem(createcopy({}, o), p) }
var t4 = intersection(r, s);
console.log(t4);
