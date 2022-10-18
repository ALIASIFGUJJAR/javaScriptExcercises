//Adding more Guests

const invitedPeople = ["Uneeb", "Ibrahim", "Arshad", "Raja", "Shahzaib"];

console.log(invitedPeople);

const arrayLength = invitedPeople.length;

for (let i = 0; i < arrayLength; i++) {
  console.log("Please join us at dinnetr Dear : " + invitedPeople[i]);
}

const msg = "Sorry I can't join your friend: " + invitedPeople[1];

console.log("\n" + msg + "\n");

invitedPeople.splice(1, 1);

console.log(invitedPeople);

for (i = 0; i < invitedPeople.length; i++) {
  console.log("Please join us at dinnetr Dear : " + invitedPeople[i]);
}

/// Adding more Guests
//At Begining
let addNewGuestAtBegining = invitedPeople.unshift("Talha");
console.log("\n New Guests at Begining of Array");
console.log(invitedPeople);
//At End
let addNewGuestAtEnd = invitedPeople.push("Majid");
console.log("\n New Guests at End of Array");
console.log(invitedPeople);
//Adding usman name at  Middle
let addNewGuestAtMiddle = invitedPeople.splice(3, 0, "Usman");
console.log("\n New Guests at End of Array");
console.log(invitedPeople);

console.log(`"Bigger Dinner Table List:"`);
for (let i = 0; i < invitedPeople.length; i++) {
  //Final Invitation
  console.log("Please join us at dinnetr Dear : " + invitedPeople[i]);
}

///Shrink the Array
console.log("We can invite only two people for dinner:");

const shrinkArray = invitedPeople.splice(0, 2);

for (let i = 0; i < invitedPeople.length; i++) {
  //Final Invitation
  console.log("Sorry  : " + invitedPeople[i]);
}

for (let i = 0; i < shrinkArray.length; i++) {
  //Final Invitation
  console.log("Please join us at dinnetr Dear : " + shrinkArray[i]);
}

//Empty List
const emptyList = invitedPeople.splice(0);
console.log(invitedPeople);
