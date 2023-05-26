/*
821-shortest-distance-to-a-character
leetcode/eas/821. Shortest Distance to a Character
URL: https://leetcode.com/problems/shortest-distance-to-a-character/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function findDistance(s: string[], c: string): number[] {
  const result: number[] = [];

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === c) {
      result.push(0);
    } else {
      result.push(s.slice(i).indexOf(c));
    }
  }

  return result;
}

function filteringNegativeNums(nums: number[]): number[] {
  return nums.map((e) => {
    return e === -1 ? Number.MAX_SAFE_INTEGER : e;
  });
}

function shortestToChar(s: string, c: string): number[] {
  let forward: number[] = findDistance(s.split(''), c);
  let backward: number[] = findDistance(s.split('').reverse(), c).reverse();
  forward = filteringNegativeNums(forward);
  backward = filteringNegativeNums(backward);
  const result: number[] = [];

  for (let i = 0; i < forward.length; i += 1) {
    result.push(Math.min(forward[i], backward[i]));
  }

  return result;
}

// Example 1:
//
let s = 'loveleetcode', c = 'e';
console.log(shortestToChar(s, c));
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]
// Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
//   The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
// The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
// For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
// The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.
// Example 2:
//
s = 'aaab', c = 'b';
console.log(shortestToChar(s, c));
// Output: [3,2,1,0]
