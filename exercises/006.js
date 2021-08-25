/*
  Write a JavaScript program to calculate number of days left until next Christmas.
*/

const today = new Date();
const christmas = new Date(today.getFullYear(), 11, 25);
const isChristmasOverCurrentYear = today.getMonth() === 11 && today.getDate() > 25;

if (isChristmasOverCurrentYear) {
  christmas.setFullYear(christmas.getFullYear() + 1); 
}

const oneDayinMiliseconds = 1000 * 60 * 60 * 24;
const daysLeftUntilChristmas = Math.ceil((christmas.getTime() - today.getTime()) / (oneDayinMiliseconds));

console.log(`${daysLeftUntilChristmas} days left until Christmas!`);