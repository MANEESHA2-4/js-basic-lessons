/*
*Methods:*
- A function which lives inside an object.
- For eg `console.log('Hey')` : here `log` is the method and `c`onsole` is the object.
- *2 ways to define methods:*
*/
const employee = {
  name: 'Maneesha',
  // method
  sayHi: function () {
    console.log(`Hi!!! ${this.name}`)
    return `Hi ${this.name}`
  },
  print: () => {
    console.log('Hello employee')
  },
  yellHi () {
    console.log(`Hi ${this.name.toUpperCase()}`)
  }
}
employee.sayHi()
employee.print()
employee.yellHi()
