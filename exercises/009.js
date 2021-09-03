/*
  Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
*/

// Solution № 1

function removeCharacterWithSubstringMethod(string, charPosition) {
  const firstPartOfWord = string.substring(0, charPosition);
  const secondPartOfWord = string.substring(charPosition + 1, string.length);
  return `${firstPartOfWord}${secondPartOfWord}`;
}

// Solution № 2

function removeCharacterWithSubstrMethod(string, charPosition) {
  const firstPartOfWord = string.substr(0, charPosition);
  const secondPartOfWord = string.substr(charPosition + 1);
  return `${firstPartOfWord}${secondPartOfWord}`;
}

console.log(removeCharacterWithSubstringMethod("JavaScript", 0));
console.log(removeCharacterWithSubstringMethod("JavaScript", 3));
console.log(removeCharacterWithSubstringMethod("JavaScript", 5));

console.log(removeCharacterWithSubstrMethod("JavaScript", 1));
console.log(removeCharacterWithSubstrMethod("JavaScript", 4));
console.log(removeCharacterWithSubstrMethod("JavaScript", 6));
