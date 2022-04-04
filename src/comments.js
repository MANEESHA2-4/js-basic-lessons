/* eslint-disable eol-last */
/* eslint-disable semi */
const myName = 'NamefieldEmpty' // single
const middle = 'Gabbar' // double
const last = 'Singh' // back tick
console.log(myName)
console.log(middle)
console.log(last)
const sentence1 = 'shes\'s so cool'
console.log(sentence1)
const sentence2 = "shes's so cool"
console.log(sentence2)
const sentence3 = 'shes\'s so cool\''
console.log(sentence3)
const sentence4 = "She's so \"cool\"";
// eslint-disable-next-line eol-last
console.log(sentence4);
// eslint-disable-next-line spaced-comment
// multi line string using single quote doesn't work
const song1 = 'I Like ARR songs and aniruth songs'
console.log(song1);
// eslint-disable-next-line camelcase
const hello3 = 'hello my name is' + myName + '.Nice to meet you';
console.log(hello3);
const hello4 = `hello my name is ${myName}. Nice to meet you. I am ${1 + 100} years old`;
console.log(hello4);
const html = `<div>
<h2>${myName}</h2>
<p>${hello3}</p>
</div>
`;
console.log(html);
document.body.innerHTML = html;