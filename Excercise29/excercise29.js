//Favorite Fruit:
//here I used filter in which we are using function to cehck matching value
var Fruits = [
  "apple",
  "orange",
  "pineapple",
  "bnana",
  "watermelon",
  "grapes",
  "cocunut",
];

var favFruit = "apple";
var result = Fruits.filter(function (val) {
  return val == favFruit;
});
console.log("You really like " + result + "!");

var favFruit = "orange";
var result = Fruits.filter(function (val) {
  return val == favFruit;
});
console.log("You really like " + result + "!");

var favFruit = "bnana";
var result = Fruits.filter(function (val) {
  return val == favFruit;
});
console.log("You really like " + result + "!");

var favFruit = "grapes";
var result = Fruits.filter(function (val) {
  return val == favFruit;
});
console.log("You really like " + result + "!");

var favFruit = "cocunut";
var result = Fruits.filter(function (val) {
  return val == favFruit;
});
console.log("You really like " + result + "!");
