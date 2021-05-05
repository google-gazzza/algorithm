/*
how-many-arguments

# codewars/7kyu/How many arguments
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5c44b0b200ce187106452139/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const args_count = (...args) => args.length;

// use default property
function args_count2() {
  return arguments.length;
}

// test
console.log(args_count(1, 2, 3));
console.log(args_count());

console.log(args_count2(1, 2, 3));
console.log(args_count2());
