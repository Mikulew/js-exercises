/*
  Write a JavaScript program where the program takes a random integer between 1 to 10,
  the user is then prompted to input a guess number.
  If the user input matches with guess number, the program will display a message "Matched"
  otherwise display a message "Not matched".
*/

const number = Math.ceil(Math.random() * 10);
const guess = prompt('Guess the number between 1 and 10 inclusive');
(guess == number) ? alert('Matched') : alert(`Not matched, the number was: ${number}`)
location.reload();