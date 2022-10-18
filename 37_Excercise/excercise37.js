//Large Shirt

var make_tshirt = (size, text) => {
  console.log(
    "The size of shrit is: " + size + "\nThe text on shirt will be: " + text
  );
};
var defaultMessage = "I love JavaScript";
make_tshirt("large", defaultMessage);

make_tshirt("medium", defaultMessage);

make_tshirt("small", "small shirt size");
