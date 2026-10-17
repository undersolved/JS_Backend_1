// This means - who owns this code right now
// this is not fixed
// it depends on how a function is called

// this in a simple object - most common -------------->

const userService = {
	user: "Bhupendra",
	printUser() {
		console.log(this.user);
	},
};

