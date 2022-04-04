/* eslint-disable no-new-object */
/* eslint-disable no-unused-vars */
/* eslint-disable no-control-regex */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-new-func */
/* eslint-disable no-array-constructor */
/* eslint-disable no-undef */
/* eslint-disable no-new-wrappers */
const Person = function (living, age, gender) {
  this.living = living
  this.age = age
  this.gender = gender
  this.getGender = function () { return this.gender }
}
const smith = new Person(true, 33, 'male')
console.log(smith)
// ------------------
const myNumber = new Number(23)
const myString = new String('male')
const myBoolean = new Boolean(false)
// eslint-disable-next-line new-cap
const myObject = new Object()
// eslint-disable-next-line comma-spacing
const myArray = new Array('foo','bar')
const myFunction = new Function('x', 'y', 'return x*y')
const myDate = new Date()
const myRegExp = new RegExp('\bt[a-z]+\b')
const myError = new Error('Sorry!')
console.log(myNumber.constructor)// logs Number()
console.log(myString.constructor)// logs String()
console.log(myBoolean.constructor)// logs Boolean()
console.log(myObject.constructor)// logs Object()
console.log(myArray.constructor)
console.log(myFunction.constructor)// logs Function()
console.log(myDate.constructor)// logs Date()
console.log(myRegExp.constructor)// logs RegExp()
console.log(myError.constructor)// logs Error()
