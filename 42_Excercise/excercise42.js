//Great Magicians

var magicianNames = ["Arshad", "Uneeb", "Raja", "Ibrahim"];

var show_magician = () => {
  for (i = 0; i < magicianNames.length; i++) {
    console.log(magicianNames[i]);
  }
};
show_magician();

var make_Great = () => {
  magicianNames.forEach((element, index) => {
    magicianNames[index] = element + " The Great";
  });
};

make_Great();
show_magician();
