// Use Case 1 = Function declaration for main backend logic
// controllers, services etc.
// ---------------------------------------------------------------------

function createUser(user) {
	return user.name;
}

// Use case 2 = Arrow functions
// for callbacks and short logic
// ---------------------------------------------------------------------

const users = ["Bittu", "Shiva"];
users.forEach((user) => console.log(user));

// Use case 3 = expression functions
// for helper function, define it close to usage
// ---------------------------------------------------------------------

const formatEmail = function (email) {
	return email.toLowerCase();
};

// Use case 4 = Callback functions
// for async logic and librarries
// ---------------------------------------------------------------------

function processData(data, callback) {
	callback(data);
}
