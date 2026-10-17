// use in objects to loop over keys
// not to be used in arrays
// takes in everything as a string
// therefore when we us it to loop over an array, it will just give indexes
// for of is much better choice in most cases

const user = {
	name: "Bhupendra",
	age: 23,
	email: "singh.bhupendra.h@gmail.com",
};

for (const key in user) {
	console.log(user[key]);
}

console.log(user["name"]);
