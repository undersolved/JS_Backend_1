// value types

let a = 10;
let b = a;
b = 20;
console.log(a, b);

// reference types --> objects and arrays share same memory box

const user1 = { name: "Bhupendra" };
const user2 = user1;

user2.name = "Alex";

console.log(user1);

// const list2 = list1;
// list2.push(44);
// console.log(list1);
// console.log(list2);


const list1 = [1, 2, 3];
const list3 = [...list1];
list3.push(4);
console.log(list1);
console.log(list3);
