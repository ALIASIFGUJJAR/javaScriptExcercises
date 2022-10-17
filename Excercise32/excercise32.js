//Checking Usernames:
//

var current_users = ["Ali", "Admin", "Uneeb", "Arshad", "Kashif"];

var new_users = ["Haris", "Admin", "Usman", "Arshad", "Javed"];

let lower_CurrentUser = current_users.map((element) => {
  return element.toLowerCase();
});

let lower_newUser = new_users.map((element) => {
  return element.toLowerCase();
});

var matches = [];
var dontMAtch = [];

for (var i = 0; i < lower_newUser.length; i++) {
  if (lower_newUser[i] === lower_CurrentUser[i]) {
    matches.push(lower_CurrentUser[i]);
  } else if (lower_newUser[i] !== lower_CurrentUser[i]) {
    dontMAtch.push(lower_newUser[i]);
  }
}

console.log("User is already taken: " + matches);

console.log("Hellow: " + dontMAtch);
