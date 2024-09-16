/*
broken-sequence

# codewars/7kyu/Broken sequence
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5512e5662b34d88e44000060/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function findMissingNumber(sequence) {
  if (sequence.replace(/\d/g, '').trim().length) {
    return 1;
  }
  
  const set = new Set(sequence.split(' ').map(Number));
  const max = Math.max(...set.values());
  
  for (let i = 1; i < max; i += 1) {
    if (!set.has(i)) {
      return i;
    }
  }
  
  return 0;
}

// test
console.log(findMissingNumber("1 2 3 5"), 4, "It must work for missing middle terms");
console.log(findMissingNumber("1 3"), 2, "It must work for missing middle terms");
console.log(findMissingNumber("1 5"), 2, "It must work for missing more than one number");
console.log(findMissingNumber(""), 0, "It must return 0 for an empty sequence");
console.log(findMissingNumber("1 2 3 4 5"), 0, "It must return 0 if no number is missing");
console.log(findMissingNumber("2 3 4 5"), 1, "It must return 1 for a sequence missing the first element");
// console.log(findMissingNumber("2 6 4 5 3"), 1, "It must work for a shuffled input");
console.log(findMissingNumber("2 1 4 3 a"), 1, "It must return 1 for an invalid sequence");
console.log(findMissingNumber("221 21"));
