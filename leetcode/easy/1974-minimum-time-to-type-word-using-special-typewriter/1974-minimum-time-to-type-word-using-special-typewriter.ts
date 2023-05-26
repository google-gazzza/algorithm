/*
1974-minimum-time-to-type-word-using-special-typewriter
leetcode/easy/1974. Minimum Time to Type Word Using Special Typewriter
URL: https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/

NOTE: Description
NOTE: Constraints
  - 1 <= arr.length <= 1000
  - 0 <= arr[i] <= 1000

NOTE: Explanation
NOTE: Reference
*/

function minTimeToType(word: string): number {
  const alphbet: string = 'abcdefghijklmnopqrstuvwxyz';
  let count = Math.min(alphbet.indexOf(word[0]), 26 - alphbet.indexOf(word[0])) + 1;
  let prevIndex = alphbet.indexOf(word[0]);

  for (let i = 1; i < word.length; i += 1) {
    const currentIndex = alphbet.indexOf(word[i]);
    const distance = Math.abs(currentIndex - prevIndex);
    count += Math.min(distance, 26 - distance);
    count += 1;

    prevIndex = currentIndex;
  }

  return count;
}

let word = 'abc';
console.log(minTimeToType(word));
// Output: 5

word = 'bza';
console.log(minTimeToType(word));
// Output: 7

word = 'zjpc';
console.log(minTimeToType(word));
// Output: 34

word = 'pdy';
console.log(minTimeToType(word));
// 31
