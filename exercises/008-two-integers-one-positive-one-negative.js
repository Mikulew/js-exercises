/*
  Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
*/

function checkIsPositiveNegative(x, y) {
  return ((x < 0 && y > 0) || (x > 0 && y < 0));
}
console.log(checkIsPositiveNegative(2, 2)); // false
console.log(checkIsPositiveNegative(-2, 2)); // true
console.log(checkIsPositiveNegative(2, -2)); // true
console.log(checkIsPositiveNegative(-2, -2)); // false