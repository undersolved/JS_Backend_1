// Using process Argv for backend scripts

// ⚙️ Example 1 => Mode based script

const mode = process.argv[2];

if (mode === "dev") {
	console.log("Running in DEV mode");
} else if (mode === "prod") {
	console.log("Running in PROD mode");
} else {
	console.log("Unknown mode");
}

// ⚙️ Example 2 => Action based script
// like creating a user or deleting a user

if (!mode) {
	console.log("Mode name required");
	return;
}
console.log("RUN SUCCESS");

console.log("Happckna");
console.log("Happckna");
console.log("Happckna");
