/*
anagram-detection

# codewars/7kyu/Anagram Detection
Difficulty: 7kyu
URL: https://www.codewars.com/kata/529eef7a9194e0cbc1000255/
  Tags:
    
    ## Approach

### en

### kr

## Solution
### JavaScript

*/

const convertToSortedString = (str) => [...str.toLowerCase()].sort().join('');
const isAnagram = (a, b) => convertToSortedString(a) === convertToSortedString(b);

// test
console.log(isAnagram('foefet', 'toffee'), true, 'The word foefet is an anagram of toffee');
console.log(isAnagram('Buckethead', 'DeathCubeK'), true, 'The word Buckethead is an anagram of DeathCubeK');
console.log(isAnagram('Twoo', 'WooT'), true, 'The word Twoo is an anagram of WooT');

console.log(isAnagram('dumble', 'bumble'), false, 'Characters do not match for test case dumble, bumble');
console.log(isAnagram('ound', 'round'), false, 'Missing characters for test case ound, round');
console.log(isAnagram('apple', 'pale'), false, 'Same letters, but different count');
