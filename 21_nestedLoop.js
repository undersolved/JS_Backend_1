const users = [
	{ name: "Bhupendra", orders: [100, 200] },
	{ name: "Aditya", orders: [258, 480] },
];

for (const user of users) {
	for (const order of user.orders) {
		console.log(user.name, order);
	}
}
