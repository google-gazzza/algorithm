// leetcode/easy/2788. Split Strings by Separator
// 2788-split-strings-by-separator
// URL: https://leetcode.com/problems/split-strings-by-separator/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

function splitWordsBySeparator(words: string[], separator: string): string[] {
  const result: string[][] = [];

  for (let i = 0; i < words.length; i += 1) {
    result.push(words[i].split(separator));
  }

  return result.flat()
    .filter((word) => word.length > 0);
}

let words = ["one.two.three", "four.five", "six"];
let separator = ".";
console.log(splitWordsBySeparator(words, separator));
// Output: ["one","two","three","four","five","six"]

words = ["$easy$", "$problem$"];
separator = "$";
console.log(splitWordsBySeparator(words, separator));
// Output: ["easy", "problem"];

words = ["|||"];
separator = "|";
console.log(splitWordsBySeparator(words, separator));
// Output: []
