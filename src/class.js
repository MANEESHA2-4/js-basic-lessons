/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line space-in-parens
const maxvalue = Math.max(10, 12, 35, 60, 2, 55)
console.log(maxvalue);
const floatValue = parseFloat('2.032565')
console.log(floatValue);
let intValue = parseInt('2356abcd')
console.log(intValue);
intValue = parseInt('abcd2356')
console.log(intValue);
const today = Date.now()
console.log(today)
// -----------------------
function yell (name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`
}
let greetings = yell('sowmi')
console.log(greetings);
greetings = yell()
console.log(greetings);
