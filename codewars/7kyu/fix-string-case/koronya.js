// [JS][7kyu] Fix string case
// fix-string-case
// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

const CHAR_CODE_OF_UPPER_A = "A".charCodeAt(0);
const CHAR_CODE_OF_UPPER_Z = "Z".charCodeAt(0);

const isUpperChar = (char) => {
  const charCode = char.charCodeAt(0);
  return charCode >= CHAR_CODE_OF_UPPER_A && charCode <= CHAR_CODE_OF_UPPER_Z;
};

const solve = (s) => {
  const upperCount = s
    .split("")
    .filter((char) => isUpperChar(char) === true).length;
  const lowerCount = s.length - upperCount;

  return upperCount > lowerCount ? s.toUpperCase() : s.toLowerCase();
};

solve("code");
solve("CODe");
solve("COde");
solve("Code");
