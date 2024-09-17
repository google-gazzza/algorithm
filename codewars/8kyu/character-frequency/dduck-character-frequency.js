// character-frequency
// Character Frequency
// https://www.codewars.com/kata/548ef5b7f33a646ea50000b2/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/character-frequency

const charFreq = (message) => [...message].reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});


console.log(charFreq("I like cats"), {
  'a': 1,
  ' ': 2,
  'c': 1,
  'e': 1,
  'I': 1,
  'k': 1,
  'l': 1,
  'i': 1,
  's': 1,
  't': 1
});
