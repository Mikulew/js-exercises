/*
    Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.
*/

const YEAR_STARTED = 2014;
const YEAR_ENDED = 2050;
const SUNDAY = 0;

for (let year = YEAR_STARTED; year <= YEAR_ENDED; year++) {
    let date = new Date(year, 0, 1);
    if (date.getDay() === SUNDAY) {
        console.log(`1st January is being a Sunday in ${year}`);
    }
}