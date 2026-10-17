// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
// bad example - repetetive code

function checkUserAge1(user) {
	if (user.age >= 18) {
		console.log("allowed");
	}
}
function checkUserAge2(user) {
	if (user.age >= 18) {
		console.log("allowed");
	}
}

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// use 1 function for one job

function isAdult(age) {
	return age >= 18;
}

// use params not hardcoded
// return values, not console log

// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

//💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎
// Real backend validation code example

function isValidEmail(email) {
	return email.includes("@");
}

if (!isValidEmail(user.email)) {
	console.log("Invalid email");
}
//💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎
