// simple-fun-215-properly-closed-bracket-word
// Simple Fun #215: Properly Closed Bracket Word
// difficult: 7kyu
// https://www.codewars.com/kata/59000d6c13b00151720000d5
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/simple-fun-215-properly-closed-bracket-word

const closedBracketWord = (word) => {
  if (word.length % 2 === 1) {
    return false;
  }
  
  return ![...word.slice(0, word.length / 2)]
    .some((v, i) => {
      return v.charCodeAt(0) - 97 !== 25 - (word[word.length - 1 - i].charCodeAt(0) - 97);
    });
};

console.log(closedBracketWord("abiryz"), true);
console.log(closedBracketWord("aibryz"), false);
console.log(closedBracketWord("abitryz"), false);
console.log(closedBracketWord("zhuazfsa"), true);
console.log(closedBracketWord("baby"), false);
console.log(closedBracketWord("grit"), true);
console.log(closedBracketWord("foul"), false);
