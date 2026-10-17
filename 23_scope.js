// GLOBAL SCOPE --- global variable accessed by everyone ------------>

const appName = "My App";

function showName() {
	console.log(appName);
}

showName();

// Function scope -- variable declaration inside fucntion --->

function test() {
	const message = "Hello";
	console.log(message);
}

test();

// Blocked scope (let and cosnt) ---------->

if (true) {
	let x = 10;
	const y = 20;
	console.log(x, y);
}
console.log(x, y); // this is not defined thus blocked outisde the {} block of if loop

// ❌ the var scope problem --------------->

if (true) {
	var marks = 5;
}
console.log(marks); // var ignores the block scoping

// ⏰ variable lifetime

function demo() {
	const temp = 100;
	console.log(temp);
}
demo(); // variable created only when the function runs, when the function is done, the varibale is done
