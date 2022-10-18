//City Names:

var city_Country = (city, defaultCountry = "Pakistan") => {
  console.log(`"` + city + " , " + defaultCountry + `"`);
};

city_Country("Karachi");

city_Country("Lahore");

city_Country("Mumbai", "India");
