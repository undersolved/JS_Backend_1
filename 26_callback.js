// Callback function -> one function calls another function
// ---------------------------------------------------------------------

function greet(name, callback) {
	console.log("Hello", name);
	callback();
}
function done() {
	console.log("Done greeting");
}

greet("Bhupendra", done);

// Callback Arrow Function
// ---------------------------------------------------------------------

greet("ales", () => {
	console.log("Callback fininshed");
});

//Backend Example
// ---------------------------------------------------------------------

const numbers = [1, 2, 3];
const doubled = numbers.map((x) => x * 2);
console.log(doubled);
