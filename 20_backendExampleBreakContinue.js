const users = [
	{ name: "Bhupendra", age: 23, active: true },
	{ name: "Aditya", age: 23, active: false },
	{ name: "Shubham", age: 23, active: true },
];

for (const user of users) {
	if (!user.active) {
		continue;
	}
	console.log(user.name);
}
