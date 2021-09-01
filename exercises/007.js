/*
  Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
*/

function convertToFahrnehreit(celsius) {
  const fahrenheit = celsius * 9 / 5 + 32;
  console.log(`${celsius}\xB0C is ${fahrenheit} \xB0F.`);
}

function convertToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  console.log(`${fahrenheit}\xB0F is ${celsius}\xB0C.`);
}

convertToFahrnehreit(60);
convertToCelsius(45)