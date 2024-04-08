const convertToCelsius = function(n) {
  const formula = (n - 32) * (5 / 9);
  const fixed = parseFloat(formula.toFixed(1));
  return fixed;
};

convertToCelsius(32)

const convertToFahrenheit = function(n) {
  const formula = n * 9 / 5 + 32;
  const fixed = parseFloat(formula.toFixed(1));
  return fixed;
};

convertToFahrenheit(0)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
