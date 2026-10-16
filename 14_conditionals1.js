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
