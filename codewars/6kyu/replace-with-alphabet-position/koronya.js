// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
// [JS][6kyu] Replace With Alphabet Position
// replace-with-alphabet-position

const CHARCODE_AT_LOWER_A = "a".charCodeAt(0);
const CHARCODE_AT_LOWER_Z = "z".charCodeAt(0);
const CHARCODE_AT_UPPER_A = "A".charCodeAt(0);
const CHARCODE_AT_UPPER_Z = "Z".charCodeAt(0);

const isAlphabet = (char) => {
  const charCode = char.charCodeAt(0);
  return (
    (CHARCODE_AT_LOWER_A <= charCode && CHARCODE_AT_LOWER_Z >= charCode) ||
    (CHARCODE_AT_UPPER_A <= charCode && CHARCODE_AT_UPPER_Z >= charCode)
  );
};

const getNumber = (char) => {
  const charCode = char.charCodeAt(0);
  const diff =
    charCode >= CHARCODE_AT_LOWER_A ? CHARCODE_AT_LOWER_A : CHARCODE_AT_UPPER_A;
  return String(charCode - diff + 1);
};

const alphabetPosition = (text) => {
  const textLen = text.length;
  let result = "";
  for (let i = 0; i < textLen; i += 1 || 0) {
    const char = text[i];
    if (isAlphabet(char)) {
      const numberChar = getNumber(char);
      if (result === "") {
        result += numberChar;
      } else {
        result += ` ${numberChar}`;
      }
    }
  }
  return result;
};

alphabetPosition("The sunset sets at twelve o' clock.") ===
  "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
alphabetPosition("The narwhal bacons at midnight.") ===
  "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20";
