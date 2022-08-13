/*
2273-find-resultant-array-after-removing-anagrams
leetcode/easy/2273. Find Resultant Array After Removing Anagrams
URL: https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/

NOTE: Description
NOTE: Constraints
  - 1 <= nums.length <= 100
  - 0 <= nums[i] <= 100
NOTE: Explanation
NOTE: Reference
*/

function isAnagram(word1: string, word2: string) {
  return word1.split('').sort().join('') === word2.split('').sort().join('');
}

function removeAnagrams(words: string[]): string[] {
  for (let i = 0; i < words.length - 1; i += 1) {
    if (isAnagram(words[i], words[i + 1])) {
      words.splice(i + 1, 1);
      i -= 1;
    }
  }

  return words;
}

let words = ['abba', 'baba', 'bbaa', 'cd', 'cd'];
console.log(removeAnagrams(words));
// Output: ["abba","cd"]
// Explanation:
//   One of the ways we can obtain the resultant array is by using the following operations:
//   - Since words[2] = "bbaa" and words[1] = "baba" are anagrams, we choose index 2 and delete words[2].
//   Now words = ["abba","baba","cd","cd"].
//   - Since words[1] = "baba" and words[0] = "abba" are anagrams, we choose index 1 and delete words[1].
//   Now words = ["abba","cd","cd"].
//   - Since words[2] = "cd" and words[1] = "cd" are anagrams, we choose index 2 and delete words[2].
//   Now words = ["abba","cd"].
//   We can no longer perform any operations, so ["abba","cd"] is the final answer.
//   Example 2:

words = ['a', 'b', 'c', 'd', 'e'];
console.log(removeAnagrams(words));
// Output: ["a","b","c","d","e"]
// Explanation:
//   No two adjacent strings in words are anagrams of each other, so no operations are performed.
