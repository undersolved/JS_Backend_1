const age = 2;

if (age > 12) {
	console.log(`Your age is ${age} and you are allowed to sleep`);
} else {
	console.log("You will not be allowed to vote");
}

// switch case

const day = "monday";

switch (day) {
	case "friday":
		console.log("Almost weekend");
		break;
	case "monday":
		console.log("Workday");
		break;
	default:
		console.log("Normal day");
}

// early return

// real backend example of early return

const email = true;
const password = false;

if (!email) {
	console.log("Email is missing");
	return;
}
if (password === false) {
	console.log("Password is wrong");
	return;
	console.log("Password was right");
}

console.log("passwords");

// avoid deep nesting
