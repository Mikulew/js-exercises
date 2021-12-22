/*
  Write a JavaScript program to find all 13th Friday days of a given year or range.
*/

const FRIDAY = 4;

function numberOfFridayThe13thsIn(startYear, endYear) {
  let counter = 0;
  endYear ??= startYear;
  for (let year = startYear; year <= endYear; year++) {
    for (let month = 0; month <= 11; month++) {
      const date = new Date(year, month, 13);
      if (date.getDay() === 5) {
        counter++;
      }
    }
  }
  return startYear === endYear
    ? `Number of 13th Friday in ${startYear} is ${counter}`
    : `Number of 13th Friday between ${startYear} and ${endYear} is ${counter}`;
}

console.log(numberOfFridayThe13thsIn(2012, 2012)); // "Number of 13th Friday in 2012 is 3"
console.log(numberOfFridayThe13thsIn(2012, 2015)); // "Number of 13th Friday between 2012 and 2015 is 9"