/*
1189-maximum-number-of-balloons
leetcode/easy/1189. Maximum Number of Balloons
URL: https://leetcode.com/problems/maximum-number-of-balloons/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function maxNumberOfBalloons(text: string): number {
  const balloonCount = new Map<string, number>();

  for (const char of text) {
    if (balloonCount.has(char)) {
      balloonCount.set(char, balloonCount.get(char) + 1);
    } else {
      balloonCount.set(char, 1);
    }
  }

  let count = 0;

  while (true) {
    if (balloonCount.has('b') && balloonCount.get('b') > 0) {
      balloonCount.set('b', balloonCount.get('b') - 1);
    } else {
      break;
    }

    if (balloonCount.has('a') && balloonCount.get('a') > 0) {
      balloonCount.set('a', balloonCount.get('a') - 1);
    } else {
      break;
    }

    if (balloonCount.has('l') && balloonCount.get('l') > 1) {
      balloonCount.set('l', balloonCount.get('l') - 2);
    } else {
      break;
    }

    if (balloonCount.has('o') && balloonCount.get('o') > 1) {
      balloonCount.set('o', balloonCount.get('o') - 2);
    } else {
      break;
    }

    if (balloonCount.has('n') && balloonCount.get('n') > 0) {
      balloonCount.set('n', balloonCount.get('n') - 1);
    } else {
      break;
    }

    count += 1;
  }

  return count;
}

// Example 1:
let text = 'nlaebolko';
console.log(maxNumberOfBalloons(text));
// Output: 1
// Example 2:

text = 'loonbalxballpoon';
console.log(maxNumberOfBalloons(text));
// Output: 2
// Example 3:

text = 'leetcode';
console.log(maxNumberOfBalloons(text));
// Output: 0
