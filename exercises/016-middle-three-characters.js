/*
  Write a JavaScript program to create a string using the middle three characters of a given string of odd length.
  The string length must be greater or equal to three.
*/

function takeMiddleThreeCharacterFromString(string) {
  if (string.length >= 3 && string.length % 2 !== 0) {
    const middle = (string.length + 1) / 2;

    return string.slice(middle - 2, middle + 1);
  }

  throw new Error('The string length must be greater or equal to three and has odd length.');
}

console.log(takeMiddleThreeCharacterFromString('PHP')); // "PHP"
console.log(takeMiddleThreeCharacterFromString('HTML5')); // "TML"
console.log(takeMiddleThreeCharacterFromString('Mikulew')); // "kul"
console.log(takeMiddleThreeCharacterFromString('')); // Uncaught Error: 'The string length must be...'
console.log(takeMiddleThreeCharacterFromString('MK')); // Uncaught Error: 'The string length must be...'
console.log(takeMiddleThreeCharacterFromString('CSS3')); // Uncaught Error: 'The string length must be...'
console.log(takeMiddleThreeCharacterFromString('JavaScript')) // Uncaught Error: 'The string length must be...'