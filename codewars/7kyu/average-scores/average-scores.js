/*
average-scores

# codewars/7kyu/Average Scores
Difficulty: 7kyu
URL: https://www.codewars.com/kata/57b68bc7b69bfc8209000307/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const average = (scores) => Math.round(scores.reduce((acc, cur) => acc + cur) / scores.length);

// test
let scores = [49, 3, 5, 300, 7];
console.log(average(scores), 73);

scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores), 94);
