// 🔥🔥🔥🔥🔥 Regular function ----->

function add(a, b) {
	return a + b;
}
console.log(add(11, 111));

// 🔥🔥🔥🔥🔥 Arrow function - shorter way ----->

const addition = (a, b) => {
	return a + b;
};

const subtract = (a, b) => a - b;

// 🔥🔥🔥🔥🔥 Backend use case ------>

function handleRequest(req) {
	return req.user;
}

const users = ["Ali", "Omar"];
const upper = users.map((x) => x.toUpperCase());

console.log(upper);
