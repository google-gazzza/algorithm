/*
leetcode/medium/451. Sort Characters By Frequency
451-sort-characters-by-frequency
uRL: https://leetcode.com/problems/sort-characters-by-frequency/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function frequencySort(s: string): string {
  const countMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (countMap.has(char)) {
      countMap.set(char, (countMap.get(char) || 0) + 1);
    } else {
      countMap.set(char, 1);
    }
  }

  const result = [...s].sort((a, b) => {
    const aCount = countMap.get(a) || 0;
    const bCount = countMap.get(b) || 0;

    if (aCount === bCount) {
      return a.localeCompare(b);
    }

    return bCount - aCount;
  });

  return result.join('');
}

let s = 'tree';
// Output: "eert"
console.log(frequencySort(s));

s = 'cccaaa';
console.log(frequencySort(s));
// Output: "aaaccc"

s = 'Aabb';
console.log(frequencySort(s));
// Output: "bbAa"
