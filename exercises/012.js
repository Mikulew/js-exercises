/*
  Write a JavaScript program to concatenate two strings except their first character.
*/

function concatenateTwoStringsFromFirstCharacter(string1, string2) {
  const concatenatedFirstParameter = string1.substring(1, string1.length);
  const concatenatedSecondParameter = string2.substring(1, string2.length);
  return `${concatenatedFirstParameter}${concatenatedSecondParameter}`;
}

console.log(concatenateTwoStringsFromFirstCharacter("Python", "Haskell")); // "ythonaskell"
console.log(concatenateTwoStringsFromFirstCharacter("A", "S")); // ""
console.log(concatenateTwoStringsFromFirstCharacter("AA", "SS")); // "AS"