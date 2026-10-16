const users = {
	user_name: "Bhupendra",
	age: 25,
	email: "singh.bhupendra.h@gmail.com",
};

console.log(users);
// console.log(users.age);

// users.user_name = "Aditya Singh";

// console.log(users);

const users2 = users;

users2.user_name = "Ironman";
console.log(users2);
console.log(users);
