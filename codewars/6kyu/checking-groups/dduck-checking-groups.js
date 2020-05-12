// Checking Groups
// https://www.codewars.com/kata/54b80308488cb6cd31000161/

const regexp = /\(\)|{}|\[\]/gi;

const groupCheck = (s) => {
  if (s.match(regexp) && s.match(regexp).length) {
    return groupCheck(s.replace(regexp, ''));
  }
  return s.length === 0;
};

console.log(groupCheck("()"), "That group was matched correctly");
console.log(groupCheck("{(})"), "That group was matched incorrectly");
console.log(groupCheck("[])"), "That group was left open or prematurely closed");
console.log(groupCheck("()[]{}"), "That group was matched correctly");
