/*
  Write a function to truncate a string to a certain number of words.
*/

const text = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, limit) {
    return str.split(' ').splice(0, limit).join(' ');
}

console.log(truncateWithWordLimit(text, wordLimit)); // JavaScript is simple