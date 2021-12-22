/*
  Create a new string from a given string changing the position of first and last characters.
*/

// Solution № 1

function changeFirstCharacterToLast(string) {
  if (string.length <= 1) return string;

  const mainWord = string.substring(1, string.length - 1);
  return (string.charAt(string.length - 1)) + mainWord + string.charAt(0);
}

// Solution № 2

function swap(string) {
  if (string.length <= 1) return string;

  const splitWord = string.split("");
  const firstChar = splitWord.shift();
  const lastChar = splitWord.pop();
  return (lastChar + splitWord.join("") + firstChar);
}

// Solution № 3

function replace(string) {
  if (string.length <= 1) return string;

  const length = string.length - 1;
  const firstChar = string[0];
  const lastChar = string[length];
  return string.replace(lastChar, firstChar).replace(firstChar, lastChar);
}

console.log('changeFirstCharacterToLast:', changeFirstCharacterToLast('m'));
console.log('changeFirstCharacterToLast:', changeFirstCharacterToLast('mw'));
console.log('changeFirstCharacterToLast:', changeFirstCharacterToLast('mikulew'));

console.log('swap:', swap('m')); // "m"
console.log('swap:', swap('mw')); // "wm"
console.log('swap:', swap('mikulew')); // "wikulem"

console.log('replace:', replace('m')); // "m"
console.log('replace:', replace('mw')); // "wm"
console.log('replace:', replace('mikulew')); // "wikulem"
