// leetcode/easy/2828. Check if a String Is an Acronym of Words
// 2828-check-if-a-string-is-an-acronym-of-words
// URL: https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/

function isAcronym(words: string[], s: string): boolean {
  return s === words.map(word => word[0]).join('');
}


let words = ["alice", "bob", "charlie"];
let s = "abc";
console.log(isAcronym(words, s));
// Output: true


words = ["an", "apple"];
s = "a";
console.log(isAcronym(words, s));
// Output: false


words = ["never", "gonna", "give", "up", "on", "you"];
s = "ngguoy";
console.log(isAcronym(words, s));
