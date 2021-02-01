/*
friend-or-foe

# codewars/7kyu/Friend or Foe?
Difficulty: 7kyu
URL: https://www.codewars.com/kata/55b42574ff091733d900002f/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/
const friend = (friends) => friends.filter((e) => e.length === 4);

console.log(friend(['Ryan', 'Kieran', 'Mark']), ['Ryan', 'Mark']);
console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']), ['Ryan']);
console.log(friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']), ['Jimm', 'Cari', 'aret']);
console.log(friend(['Love', 'Your', 'Face', '1']), ['Love', 'Your', 'Face']);
