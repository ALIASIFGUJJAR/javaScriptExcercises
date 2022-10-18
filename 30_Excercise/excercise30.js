//Hello Admin:

var userName = ["Ali", "Admin", "Uneeb", "Arshad", "Kashif"];

for (let i = 0; i < userName.length; i++) {
  if (userName[i] == "Admin") {
    console.log("Hello admin, would you like to see a status report");
  } else {
    console.log("Hellow" + userName[i]);
  }
}
