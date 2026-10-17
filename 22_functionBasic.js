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

// returning true or false

function isValidUser(age) {
	if (age > 18) {
		return true;
	}
	return false;
}

if (isValidUser(13)) {
	console.log("Valid user");
} else {
	console.log("Invalid user");
}
