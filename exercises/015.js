/*
  Write a JavaScript program to compute the sum of the two given integers.
  If the sum is in the range 50..80 return 65 other wise return 80.
*/

function computeIntegersAndReturnStrangeValue(x, y) {
  const sum = x + y;
  if (sum >= 50 && sum <= 80) {
    return 65;
  }

  return 80;
}

console.log(computeIntegersAndReturnStrangeValue(1, 2)); // 80
console.log(computeIntegersAndReturnStrangeValue(35, 25)); // 65
console.log(computeIntegersAndReturnStrangeValue(90, 80)); // 80
