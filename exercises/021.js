/*
  Write a JavaScript program to reverse a given integer number.
*/

const example1 = 1234;
const example2 = -6789;

function reverseGivenInteger(num) {
  let revertedNumber = Number.parseInt(num.toString().split('').reverse().join(''), 10) * Math.sign(num);
  return revertedNumber;
}

console.log(reverseGivenInteger(example1)); // 4321
console.log(reverseGivenInteger(example2)); // -9876
