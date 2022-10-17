//Changing Guest List

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
