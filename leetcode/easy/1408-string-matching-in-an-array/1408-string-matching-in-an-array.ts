/*
1408-string-matching-in-an-array
leetcode/medium/1408. String Matching in an Array
URL: https://leetcode.com/problems/string-matching-in-an-array/

NOTE: Description
NOTE: Constraints
  - 1 <= word.length, prefix.length <= 2000
  - word and prefix consist only of lowercase English letters.
  - At most 3 * 104 calls in total will be made to insert, search, and startsWith.

NOTE: Explanation
NOTE: Reference
*/

function stringMatching(words: string[]): string[] {
  const result = new Set<string>();

  words.forEach((word, i) => {
    return words.some((w, j) => {
      if (i !== j && word.includes(w)) {
        result.add(w);
      }
    });
  });

  return Array.from(result.values());
}

let words = ['mass', 'as', 'hero', 'superhero'];
// let ["as","hero"]
console.log(stringMatching(words));

words = ['leetcode', 'et', 'code'];
// Output: ["et","code"]
console.log(stringMatching(words));

words = ['blue', 'green', 'bu'];
console.log(stringMatching(words));

words = ['leetcoder', 'leetcode', 'od', 'hamlet', 'am'];
console.log(stringMatching(words));
