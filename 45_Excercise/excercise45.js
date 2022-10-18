//Cars
var make_Car = (manufacturer, model, ...others) => {
  carObject = {
    manufacturer,
    model,
  };
  others.forEach((elem) => {
    if (elem instanceof Object) {
      Object.keys(elem).forEach((el) => {
        carObject[el] = elem[el];
      });
    }
  });

  console.log(carObject);
};

make_Car("toyota", "vitz", { color: "black", year: "1994 " });

make_Car("honda", "accord", { color: "white", year: "2001" });
