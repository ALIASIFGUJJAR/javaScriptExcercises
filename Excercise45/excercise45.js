//Cars
var make_Car = (manufacturer, model, ...others) => {
  carObject = {
    manufacturer,
    model,
  };
  others.forEach((elem) => {
    carObject[Object.keys(elem)[0]] = Object.values(elem)[0];
  });
  Object.keys(carObject).forEach((key) => {
    if (carObject[key] === undefined) {
      delete albumObject[key];
    }
  });
  console.log(carObject);
};

make_Car("toyota", "vitz", { color: "black" }, { year: "1994 " });
