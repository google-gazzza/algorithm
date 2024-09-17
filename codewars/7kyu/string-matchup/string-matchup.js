/*
string-matchup

# codewars/7kyu/String matchup
Difficulty: 7kyu
URL: https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const solve = (a, b) => b.map((e) => a.filter((e2) => e === e2).length);

console.log(solve(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
console.log(solve(['abc', 'xyz', 'abc', 'xyz', 'cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
console.log(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);
