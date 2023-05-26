/*
412-fizz-buzz

# leetcode/easy/412. Fizz Buzz
Difficulty: easy
URL: https://leetcode.com/problems/fizz-buzz/
Tags:

## Approach

### en

### kr

## Solution
### TypeScript

*/

function fizzBuzz(input: number): string[] {
  let n = 1;
  const result: string[] = [];

  while (n <= input) {
    if ((n % 3 === 0 && n % 5 === 0)) {
      result.push('FizzBuzz');
    } else if (n % 3 === 0) {
      result.push('Fizz');
    } else if (n % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(String(n));
    }
    n += 1;
  }

  return result;
}

console.log(fizzBuzz(15));
//?

// n = 15,
//
//   Return:
// [
//   "1",
//   "2",
//   "Fizz",
//   "4",
//   "Buzz",
//   "Fizz",
//   "7",
//   "8",
//   "Fizz",
//   "Buzz",
//   "11",
//   "Fizz",
//   "13",
//   "14",
//   "FizzBuzz"
// ]
