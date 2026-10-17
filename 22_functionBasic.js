function sayHello(name) {
	console.log("Hello from backend.", name);
}

sayHello("Bhupendra");

function addition(a, b) {
	return a + b;
}

const sum = addition(10, 20.3);
console.log(sum);

// returnin true false

function canVote(age) {
	return age > 18;
}

if (canVote(2)) console.log("voting allowed");
