/*
  Write a JavaScript program to find the position of a rightmost round number in an array of integers.
  Returns -1 if there are no round number.
*/

function findRightmostRoundNumber(array) {
  if (array.some(item => typeof item !== 'number')) return new TypeError('Array must be numeric.');
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 10 === 0) {
      result = i;
    }
  }

  return result !== -1 ? `The index of a rightmost round number is ${result}.` : 'Round number is not found.';
}

console.log(findRightmostRoundNumber([2, 4, 12, 45, 21, 30, 27, 36])); // "The index of a rightmost round number is 5."
console.log(findRightmostRoundNumber([10, 11, 12, 13, 14, 15, 16])); // "The index of a rightmost round number is 0."
console.log(findRightmostRoundNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])); // "Round number is not found."
console.log(findRightmostRoundNumber(['Cat', 'Dog', 'Bird', 'Bear'])); // TypeError: Array must be numeric.