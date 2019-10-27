// https://www.codewars.com/kata/alphabetical-addition

const addLetters = (...letters) => String.fromCharCode(
  ((letters.reduce((acc, cur) => acc - 96 + cur.charCodeAt(0), 26) - 1) % 26) + 97,
);

addLetters('a', 'b', 'c');
//?
//= 'f'
addLetters('a', 'b');
//?
//= 'c'
addLetters('z');
//?
//= 'z'
addLetters('z', 'a');
//?
//= 'a'
addLetters('y', 'c', 'b');
//?
// = 'd' // notice the letters overflowing
addLetters();
//?
//= 'z'
