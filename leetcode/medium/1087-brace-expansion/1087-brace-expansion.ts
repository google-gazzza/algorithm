// leetcode/medium/1087. Brace Expansion
// 1087-brace-expansion
// URL: https://leetcode.com/problems/brace-expansion/description/?envType=study-plan-v2&envId=premium-algo-100

// Approach: Backtracking
// Time Complexity: O(n * 2^n)
// Space Complexity: O(n * 2^n)
// Q: is there another approach?
// Q: is there a way to optimize the solution?
// Q: is there a way to optimize the space complexity?
function expand(s: string): string[] {
  const combinations = [];

  const backtrack = (str) => {
    const hasBrace = str.indexOf('{');

    if (hasBrace !== -1) {
      let firstIndex = str.indexOf('{');
      let lastIndex = str.indexOf('}');
      let options = str.slice(firstIndex + 1, lastIndex).split(',');

      for (let i = 0; i < options.length; i++) {
        backtrack(str.slice(0, firstIndex) + options[i] + str.slice(lastIndex + 1));
      }
    } else {
      combinations.push(str);
    }
  };

  backtrack(s);

  combinations.sort();

  return combinations;
};

let s = "{a,b}c{d,e}f";
// console.log(expand(s));
// Output: ["acdf","acef","bcdf","bcef"]

s = "abcd";
// console.log(expand(s));
// Output: ["abcd"]

s = "{a,b}{z,x,y}"
console.log(expand(s));
// Output ["az","ax","ay","bz","bx","by"]
// Expected ["ax","ay","az","bx","by","bz"]
