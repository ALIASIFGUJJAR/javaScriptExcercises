//Sandwiches

var make_Sandwiches = (...item) => {
  for (var i = 0; i < item.length; i++) {
    console.log("PLEASE ADD " + item[i] + " in sandwich");
  }
};

make_Sandwiches("egg", "sauce", "ketchup");

make_Sandwiches("egg", "sauce", "mayonese");
