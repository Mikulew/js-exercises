/*
    Write a JavaScript program to display the current day and time in the following format.
    Today is: Tuesday.
    Current time is: 10:30:38 PM
*/

const date = new Date();
const today = date.getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const hours = date.getHours();
if (hours < 10) { hours = `0${hours}`};
let minutes = date.getMinutes();
if (minutes < 10) { minutes = `0${minutes}`};
let seconds = date.getSeconds();
if (seconds < 10) { seconds = `0${seconds}`};
let prepand = (hours >= 12) ? " PM" : " AM";

console.log(`Today is: ${days[today]}.`);
console.log(`Current Time: ${hours}:${minutes}:${seconds}${prepand}`);