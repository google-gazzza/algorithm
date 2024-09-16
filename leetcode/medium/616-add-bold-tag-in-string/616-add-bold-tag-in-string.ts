// leetcode/medium/616. Add Bold Tag in String
// 616-add-bold-tag-in-string
// URL: https://leetcode.com/problems/add-bold-tag-in-string/description/?envType=study-plan-v2&envId=premium-algo-100

// Approach:
// Time Complexity:
// Space Complexity:
// Q: is there another approach?
// Q: is there a way to optimize the solution?
// Q: is there a way to optimize the space complexity?


function mergeIntervalIntersections(intervals) {
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  result.push(intervals.shift());

  while (intervals.length) {
    const interval = intervals.shift();
    const lastInterval = result.pop();

    if (lastInterval[1] + 1 >= interval[0]) {
      result.push([lastInterval[0], Math.max(lastInterval[1], interval[1])]);
    } else {
      result.push(lastInterval);
      result.push(interval);
    }
  }

  return result;
}

function insertBoldTag(s: string, interval: number[][], adjustIndex: number = 0): string {
  const [left, right] = interval.shift();
  s = s.slice(0, adjustIndex + left) + "<b>" + s.slice(left + adjustIndex, right + 1 + adjustIndex) + "</b>" + s.slice(right + 1 + adjustIndex);

  if (interval.length) {
    return insertBoldTag(s, interval, adjustIndex + 7);
  }

  return s;
}

function addBoldTag(s: string, words: string[]): string {
  if (s.length === 0 || words.length === 0) {
    return s;
  }
  const interval = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      if (s.startsWith(word, i)) {
        interval.push([i, i + word.length - 1]);
      }
    }
  }

  if (interval.length === 0) {
    return s;
  }

  const mergedInterval = mergeIntervalIntersections(interval);

  return insertBoldTag(s, mergedInterval);
};

let s = "abcxyz123";
let words = ["abc", "123"];
console.log(addBoldTag(s, words));
// Output: "<b>abc</b>xyz<b>123</b>"

s = "aaabbb";
words = ["aa", "b"];
console.log(addBoldTag(s, words));
// Output: "<b>aaabbb</b>"
