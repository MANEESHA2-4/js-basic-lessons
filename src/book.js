/* eslint-disable new-cap */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-control-regex */
/* eslint-disable quotes */
/* eslint-disable comma-spacing */
/* eslint-disable no-new-func */
/* eslint-disable no-undef */
/* eslint-disable no-array-constructor */
/* eslint-disable no-new-wrappers */
/* eslint-disable semi */
/* eslint-disable no-new-object */
/* eslint-disable no-unused-vars */

const book = {
  'main title': 'Java script',
  'sub-title': 'The definitive guide',
  // eslint-disable-next-line quote-props
  'for': 'all audiences',
  author: {
    firstname: 'Donald',
    surname: 'Duck'
  }
}
// let len
// book = null
// if (book) {
//   if (book.sub-title) {
//     len = book.sub-title.length
//     console.log(len)
//   } else {
//     console.log('book.sub-title undefined:')
//   }
// } else {
//   console.log('book is null')
// }

// len = book && book.sub-title && book.sub-title.length
// if (len) console.log(len)

console.log(book.author)
delete book.author
console.log(book.author)

console.log(book['main title'])
delete book['main title']
console.log(book['main title'])
const o6 = { x: 100 }
console.log(o6.x)
delete o6.x
console.log(o6.x)
console.log(o6.toString)

delete Object.prototype
// eslint-disable-next-line no-unused-vars
const a = 1
delete this.a
function f1 () {}
delete this.f1()
const cody = new Object()
cody.living = true
cody.age = 33
cody.gender = 'male'
cody.getGender = 'male'
cody.getGender = function () { return cody.gender }
console.log(cody.getGender())
console.log(cody)
// ---------------
const myObject = new Object()
myObject['0'] = 'f'
myObject['1'] = 'o'
myObject['2'] = 'o'
console.log(myObject)
// eslint-disable-next-line no-new-wrappers
const myString = new String('foo');
console.log(myString);
// -----------------------
