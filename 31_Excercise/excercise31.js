//Hello Admin:
//here I used nested If first if will check if length of array is empty go straight to else or do some thing

var userName = [];

if (userName.length !== 0) {
  for (let i = 0; i < userName.length; i++) {
    if (userName[i] == "Admin") {
      console.log("Hello admin, would you like to see a status report");
    } else {
      console.log("Hellow: " + userName[i]);
    }
  }
} else {
  console.log("We need to find some users!");
}
