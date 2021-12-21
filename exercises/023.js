/*
  Write a program to find the greatest common divisor (gcd) of two positive numbers.
*/

function validateParameters(x, y) {
  return Number.isInteger(x) && Number.isInteger(y);
}

const errorMessage = 'The parameters must be integers.';

// Solution № 1 - iterative

function getGreatestCommonDivisor(a, b) {
  if (!validateParameters(a, b)) {
    throw Error(errorMessage);
  }
  a = Math.abs(a);
  b = Math.abs(b);
  if (b > a) {
    let [a, b] = [b, a];
  }
    while (true) {
      if (b == 0) return a;
      a %= b;
      if (a == 0) return b;
      b %= a;
  }
}

// Solution № 2 - recursive
function gdc(x, y) {
  if (!validateParameters(x, y)) {
    throw Error(errorMessage);
  }
  return (!y) ? x : gdc(y, (x % y));
}


const a = 2154;
const b = 456;

console.log(getGreatestCommonDivisor(a, b)); // 6
console.log(gdc(a, b)); // 6