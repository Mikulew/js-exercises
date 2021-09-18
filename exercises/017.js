/*
  Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

  A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers.
  A natural number greater than 1 that is not prime is called a composite number.

  primeNumber !== compositeNumber
*/

function isPrime(number) {
  for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
  }
  return true;
}

function getPrimeNumbers(max) {
  let array = [2];
  for (let i = 3; i < max; i += 2) {
    if (isPrime(i)) {
      array.push(i);
    }
  }
  return array;
}

function* primeNumbersGenerator(count, iterable) {
  for (let x  of iterable) {
    if (count <= 0) return;
    count--;
    yield x;
  }
}

function* primes() {
  let n = 2;
  while (true) {
    if (isPrime(n)) yield n;
    n++;
  }
}

const getPrimeNumbersFunctional = to => 
  [...Array(to - 1)
    .keys()]
    .map(i => i + 2)
    .filter(n =>
      [...Array(n - 2)
        .keys()]
        .map(i => i + 2)
        .reduce((acc, x) => acc && n % x !== 0, true)
);

console.log(getPrimeNumbers(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
console.log([...primeNumbersGenerator(7, primes())]); // [2, 3, 5, 7, 11, 13, 17]
console.log(getPrimeNumbersFunctional(24)); // [2, 3, 5, 7, 11, 13, 17, 19, 23]
