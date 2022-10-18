//UnchangeMagician
//to make copy of array used var newmagicianName = magicianNames.slice();
var make_Album = (artist, title, tracks) => {
  albumObject = {
    artist,
    title,
    tracks,
  };
  Object.keys(albumObject).forEach((key) => {
    if (albumObject[key] === undefined) {
      delete albumObject[key];
    }
  });
  console.log(albumObject);
};

make_Album("AtifAslam", "Singer");

make_Album("SidhuMooseWala", "Punjabi Singer", "8");

//Work of Excercise 43

var magicianNames = ["Arshad", "Uneeb", "Raja", "Ibrahim"];

var show_magician = () => {
  for (i = 0; i < magicianNames.length; i++) {
    console.log(magicianNames[i]);
  }
};
show_magician();

var newmagicianName = magicianNames.slice();
var make_Great = () => {
  var a = newmagicianName.map((element, index) => {
    newmagicianName[index] = element + " The Great";
  });
  for (i = 0; i < newmagicianName.length; i++) {
    console.log(newmagicianName[i]);
  }
};

make_Great();

show_magician();
