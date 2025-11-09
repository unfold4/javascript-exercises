const convertToCelsius = function(n) {
  let res= (n-32)*5/9;
  return (Math.round(res*10))/10;
};

const convertToFahrenheit = function(n) {
  let res=9/5*n+32;
    return (Math.round(res*10))/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


convertToCelsius(32) // fahrenheit to celsius, should return 0

convertToFahrenheit(0) // celsius to fahrenheit, should return 32