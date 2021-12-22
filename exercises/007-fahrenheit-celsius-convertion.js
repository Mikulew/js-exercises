/*
  Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
*/

function convertToFahrnehreit(celsius) {
  const fahrenheit = celsius * 9 / 5 + 32;
  console.log(`${celsius}\xB0C is ${fahrenheit.toFixed(2)} \xB0F.`);
}

function convertToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  console.log(`${fahrenheit}\xB0F is ${celsius.toFixed(2)}\xB0C.`);
}

convertToFahrnehreit(60); // "60°C is 140 °F."
convertToCelsius(45); // "45°F is 7.22°C."