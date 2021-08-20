/*
    Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/

function consoleLogQuestion(text, boolean) {
    console.log(text, boolean);
}
const text = 'Is this year leap year?';
const logQuestion = boolean => consoleLogQuestion(text, boolean);

// Solution № 1

function isLeapYear (year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

// Solution № 2
function isLeapYearSpaghettiCode (year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Solution № 3
function checkLeapYear(year) {
    if (( year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year`);
        return true;
    } else {
        console.log(`${year} is not a leap year`);
        return false;
    }
}


logQuestion(isLeapYear(1900));
logQuestion(isLeapYear(1600));
logQuestion(isLeapYear(2012));
