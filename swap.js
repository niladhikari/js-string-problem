// helping temp swap

let a = 12;
let b = 6;
let temp = a;
a = b;
b = temp;
// console.log(a,b);

//without temp swap using destructing
let first = 5;
let second = 7;
console.log(first,second);
[first,second] = [second,first];
console.log(first,second);
