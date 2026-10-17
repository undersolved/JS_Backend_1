// reading input from the command line

// first command line argument ⬇️

// console.log(process.argv);

// check

const name = process.argv[2];
const age = process.argv[3];
const email = process.argv[4];
// console.log("Hello", name, age, email);

// because by default process.argv has index 0 and 1 at node path and file path, so we start with index[2]

// IO simple addition program by taking input

const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

// console.log(a + b);

if (!a) {
	console.log("a is required");
	return;
}
