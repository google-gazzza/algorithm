// split-strings
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

const solution = (str) => {
  if (str.length % 2 === 1) {
    str += '_';
  }
  
  let result = [];
  
  while (str.length) {
    result.push(str.slice(0, 2));
    str = str.slice(2);
  }
  
  return result;
};

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);
