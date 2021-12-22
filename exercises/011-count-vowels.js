/*
  Write a JavaScript program to count the number of vowels in a given string.
*/

// Solution № 1

function countVowels(string) {
  return string.replace(/[^aeiou]/g, "").length;
}

// Solution № 2

function countVowelsByArrayMethod(string) {
  let arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  for (let i = 0; i < arrayOfVowels.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (arrayOfVowels[i] === string[j].toLowerCase()) {
        vowelCount += 1;
      }
    }
  }
  return vowelCount;
}

// Solution № 3
function countVowelsForMethod(string) {
  let vowelCount = 0;
  for (let i = 0; i <= string.length; i++) {
    if (string.charAt(i) === "a"
      || string.charAt(i) === "e"
      || string.charAt(i) === "i"
      || string.charAt(i) === "o"
      || string.charAt(i) === "u") {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

console.log(countVowels("mikulew")); // 3
console.log(countVowelsByArrayMethod("mikulew")); // 3
console.log(countVowelsForMethod("mikulew")); // 3