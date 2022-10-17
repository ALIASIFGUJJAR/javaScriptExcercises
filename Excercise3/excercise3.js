const myMessage = "How are you?";

console.log("Upper Case: " + myMessage.toUpperCase());

console.log("Lower Case: " + myMessage.toLowerCase());

///Title Case
function titleCase(str) {
  var words = str.toLowerCase().split(" ");
  console.log(words);
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return console.log(words.join(" "));
}

titleCase(myMessage);
