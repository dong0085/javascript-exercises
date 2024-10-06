const convertToCelsius = function (x) {
  let y = ((x - 32) * 5) / 9;
  return Math.round(y * 10) / 10;
};

const convertToFahrenheit = function (x) {
  let y = x * (9 / 5) + 32;
  return Math.round(y * 10) / 10;
};

console.log(convertToCelsius(80));
console.log(convertToFahrenheit(30));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
