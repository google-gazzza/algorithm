// character-with-longest-consecutive-repetition
// Character with longest consecutive repetition
// difficulty: 6kyu
// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/

const longestRepetition = (s) => {
  let longestConsecutiveChar = '';
  let longestLength = 0;
  
  for (let i = 0; i < s.length; i++) {
    let newChar = s[i];
    let count = 0;
    
    while (newChar === s[i]) {
      count += 1;
      i += 1;
    }
    i -= 1;
    
    if (count > longestLength) {
      longestLength = count;
      longestConsecutiveChar = newChar;
    }
  }
  
  return [longestConsecutiveChar, longestLength];
};


console.log(longestRepetition("aaaabb"), ["a", 4]);
console.log(longestRepetition("bbbaaabaaaa"), ["a", 4]);
console.log(longestRepetition("cbdeuuu900"), ["u", 3]);
console.log(longestRepetition("abbbbb"), ["b", 5]);
console.log(longestRepetition("aabb"), ["a", 2]);
console.log(longestRepetition(""), ["", 0]);
console.log(longestRepetition("ba"), ["b", 1]);
