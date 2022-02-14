/*
383-ransom-note
leetcode/medium/383. Ransom Note
Difficulty: easy
URL: https://leetcode.com/problems/ransom-note/

NOTE: Description
  Given two strings ransomNote and magazine,
  return true if ransomNote can be constructed from magazine and false otherwise.
  Each letter in magazine can only be used once in ransomNote.

NOTE: Constraints
  1 <= ransomNote.length, magazine.length <= 105
  ransomNote and magazine consist of lowercase English letters.

NOTE: Explanation
   set(magazine) - set(ransomNote) >= 0 is the answer
   so we need counting each charater in ransomNote and magazine
   and check 'every' character in ransomNote is in magazine
*/

function countCharater(str: string): { [key: string]: number } {
  const obj: { [key: string]: number; } = {};

  str.split('').forEach((e) => {
    if (obj[e] === undefined) {
      obj[e] = 1;
    } else {
      obj[e] += 1;
    }
  });

  return obj;
}

function canConstruct(ransomNote: string, magazine: string): boolean {
  const ransomNoteCounter = countCharater(ransomNote);
  const magazineCounter = countCharater(magazine);

  return Object.entries(ransomNoteCounter).every((e) => {
    return magazineCounter[e[0]] >= ransomNoteCounter[e[0]];
  });
}


// Example 1:
//
let ransomNote = 'a';
let magazine = 'b';
console.log(canConstruct(ransomNote, magazine));
// Output: false
// Example 2:
//
ransomNote = 'aa';
magazine = 'ab';
console.log(canConstruct(ransomNote, magazine));
// Output: false
// Example 3:
//
ransomNote = 'aa';
magazine = 'aab';
console.log(canConstruct(ransomNote, magazine));
// Output: true
