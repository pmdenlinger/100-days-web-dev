let age = 32;
let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = { title: "Developer", place: "New York", salary: 50000 };

let job1 = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);
