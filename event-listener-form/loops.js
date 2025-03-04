for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// forof loop used for arrays
const users = ["Max", "Anna", "Joel"];

for (const user of users) {
  console.log(user);
}

// For in loop used on objects

const loggedInUser = {
  name: "Max", 
  age: 32,
  isAdmin: true
};

// Outputs propertyName only

for (const propertyName in loggedInUser) {
  console.log(propertyName);
}