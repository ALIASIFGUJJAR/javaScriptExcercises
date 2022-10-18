//Album:
//Object.keys () is used to get object

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

  Object.assign(albumObject, { color: "red", food: "pizza" });

  // 👇️️ {country: 'Chile', color: 'red', food: 'pizza'}
  console.log(obj);
};

make_Album("AtifAslam", "Singer");

make_Album("SidhuMooseWala", "Punjabi Singer", "8");
