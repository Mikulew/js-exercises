/*
  Write a JavaScript program to check whether a given number is in a given range.
*/

function isInRange(x, y, z) {
    return y >= x && y <= z || y >= z && y <= x;
}

console.log(isInRange(1, 2, 3)); // true
console.log(isInRange(3, 2, 1)); // true
console.log(isInRange(1, 4, -5)); // false
console.log(isInRange(1, 4, 3)); // false
console.log(isInRange(1, 1, 1)); // true
console.log(isInRange(2.1, 2.2, 2.3)); // true
console.log(isInRange(5.5, 5.4, 5.3)); // true