const names = ['John','sam','Peter'];
console.log(names[0]);
console.log(names.length);
console.log(names[names.length - 1]);
/*
what is the output for the above names is an array of strings
length is a property of array
it returns a number
the lower bound of an array is 0 (Zero)
the upper bound of the array is  length -1;
the index for john is 0
the index for sam is 1
the index for peter is 2
*/
// methods of Array
names.push('suresh');
console.log('After push:' +names);
//push will add the item at the end
//... is called as the spread operator
// it represent the entire items in the array
const names2 = [...names,'Raj'];
console.log('names2:' + names2);
names.unshift('poppy');
console.log('unshift' +names);
//
// it adds data to the beginning
// so the index no of the res of the values will change now

const names3 = ['raj',...names];
console.log(names3);
//this will add data at the beginning
//now next method slice()
//create a new array
const bikes =['binanchi','miele','panasonic','miyata'];
const b1=[...bikes.slice(0,2)];
console.log(b1);
// slice takes 2 parameters
// from,to
//it has copied 2 values from index 0 and assigned to b1
const b2 = [...bikes.slice(3)];
console.log(b2);//last 2
const newBikes =[
    ...bikes.slice(0,2),
    'benetto',
    ...bikes.slice(2)
];
console.log('newBikes:'+ newBikes);
const newBikes2=[
    ...newBikes.slice(0,2),
    ...newBikes.slice(4)

];
console.log('newBikes2:'+newBikes2);
//now next method slice()
const indexOfsam = names.findIndex(name => name==='sam');
console.log('IndexOfSAM:' +indexOfsam);
//write a function to delete a name from the array?

function deleteName(nametodelete,names){
    const indexOfname = names.findIndex(n=>n===nametodelete);
    console.log('indexOf name to delete:' +indexOfname);
    const newArray =[
        ...names.slice(0,indexOfname),
        ...names.slice(indexOfname+1)

   ];
    return newArray;
};
const deleteNames=deleteName('John',names);
console.log(deleteNames);
console.log(names);
//.......................
const numbers=[1,2,3,4,5,6,7,8,9];
console.log(numbers);
//numbers.splice(3,2);//from 3 rd index delete the next values
//console.log(numbers);
const pizzaslice =numbers.slice(2, 4);
console.log('pizzaslices:'+pizzaslice);
console.log('original numbers:' +numbers);
const numberReversed =[...numbers].reverse();
console.log()


