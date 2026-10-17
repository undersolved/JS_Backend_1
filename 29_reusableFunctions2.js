// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
// function tied to one case

function createUser(user) {
	if (!user.email) {
		console.log("Email required");
	}
	return;
}

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// pattern 1 - split into smaller logics

function hasEmail(user) {
	return !!user.email;
}

if (!hasEmail(user)) {
	console.log("Email required");
}

// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
