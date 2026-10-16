// memory has two things - stack and heap
// stack -- fast and simple
// heap --> bigger and flexible
// automatic garbage collection

let x = 10;
let y = x;
y = 20;
x = 30;
console.log(x, y);

const user1 = {
	name: "Bhupendra",
	age: 23,
};

const user2 = {
	name: "Alex",
	age: 44,
};
