/*
  Write a program to generate Fibonacci numbers.
*/

// Vanilla Fibonacci iterator

function makeVanillaFibonacciSequenceIterator(endIndex = Infinity) {
  let currentIndex = 0;
  let previousNumber = 0;
  let currentNumber = 1;
  return {
    next() {
      if (currentIndex >= endIndex) {
        return { value: currentNumber, done: true };
      }

      let result = { value: currentNumber, done: false };

      let nextNumber = currentNumber + previousNumber;
      previousNumber = currentNumber;
      currentNumber = nextNumber;
      currentIndex++;

      return result;
    }
  };
}

let vanillaFibonacciSequenceIterator = makeVanillaFibonacciSequenceIterator(5);
let result = vanillaFibonacciSequenceIterator.next();
while (!result.done) {
    console.log(result.value); // 1 1 2 3 5
    result = vanillaFibonacciSequenceIterator.next();
}

// Built-in Symbol.iterator

function makeIterableFibonacciSequenceIterator(endIndex = Infinity) {
  let currentIndex = 0;
  let previousNumber = 0;
  let currentNumber = 1;
  let iterator = {};
  iterator[Symbol.iterator] = () => {
    return {
      next() {
        if (currentIndex >= endIndex) {
          return { value: currentNumber, done: true };
        }
        const result = { value: currentNumber, done: false };
        const nextNumber = previousNumber + currentNumber;
        previousNumber = currentNumber;
        currentNumber = nextNumber;
        currentIndex++;

        return result;
      }
    };
  };

  return iterator;
}

let iterableFibonacciSequenceIterator = makeIterableFibonacciSequenceIterator(5);

for (let num of iterableFibonacciSequenceIterator) {
    console.log(num); // 1 1 2 3 5
}

// Fibonacci generator function

function* fibonacci() {
  let prev = 0;
  let next = 1;

  yield prev
  yield next

  while (true) {
    const newValue = next + prev;
    yield newValue
    prev = next
    next = newValue
  }
}

const fibonacciGenerator = fibonacci();

// for (let i = 0; i < 10; i++) {
//   console.log(fibonacciGenerator.next().value);
// }