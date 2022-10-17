// Conditional Test:

// Test 1 If Statement

var bike = ["bmw", "yahamaha", "suzuki"];

console.log(bike.includes("bmw"));

//Test 2 Inequality

var reqVar = "Apple";
if (reqVar == "Apple") {
  console.log(true);
} else {
  false;
}

// Test 3Numerical Comparisons

var value = 18;

if (value == 18) {
  console.log(true);
} else {
  false;
}

//Test 4 Checking Multiple Conditions

if ((value) => 18 || value <= 18) {
  console.log(true);
} else {
  false;
}

//Test 5 Checking PSwitch Case

var age = 20;

switch (true) {
  case age > 30:
    console.log(false);

    break;
  case age < 30:
    console.log(true);

    break;

  default:
    break;
}

///False Test///
console.log("\n False Tests");
// Test 1 If Statement

var bike = ["bmw", "yahamaha", "suzuki"];

console.log(bike.includes("bsmssw"));

//Test 2 Inequality

var reqVar = "Appsle";
if (reqVar == "Apple") {
  console.log(true);
} else {
  console.log(false);
}

// Test 3Numerical Comparisons

var value = "18";

if (value === 18) {
  console.log(true);
} else {
  console.log(false);
}

//Test 4 Checking Multiple Conditions
var value1 = 20;
if (value1 >= 18 && value1 <= 18) {
  console.log(true);
} else {
  console.log(false);
}

//Test 5 Checking PSwitch Case

var age = 100;

switch (true) {
  case age > 30:
    console.log(false);

    break;
  case age < 30:
    console.log(true);

    break;

  default:
    break;
}
