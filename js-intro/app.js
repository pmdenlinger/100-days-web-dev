

let userName =  "Max";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

let totalAdultYears;

let age = 32;

function calculateAdultYears(userAge) {
  let result;
  result = userAge - 18;
  return result;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);
