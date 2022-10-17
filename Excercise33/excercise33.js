//Ordinal No :

var ordinalNo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < ordinalNo.length; i++) {
  if (ordinalNo[i] === 1) {
    console.log("1st");
  } else if (ordinalNo[i] === 2) {
    console.log("2nd");
  } else if (ordinalNo[i] === 3) {
    console.log("3rd");
  } else {
    console.log(ordinalNo[i] + "th");
  }
}
