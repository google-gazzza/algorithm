// [JS][6kyu] Count the smiley faces!
// count-the-smiley-faces
// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

//return the total number of smiling faces in the array

const VALID_EYE = [":", ";"];
const VALID_NOSE = ["-", "~"];
const VALID_MOUTH = [")", "D"];

const isValid = (str) => {
  if (VALID_EYE.includes(str[0]) === false) {
    return false;
  }
  return VALID_NOSE.includes(str[1]) === true
    ? VALID_MOUTH.includes(str[2]) === true
    : VALID_MOUTH.includes(str[1]) === true;
};

const countSmileys = (arr) => {
  return arr.reduce((acc, cur) => (isValid(cur) ? acc + 1 : acc), 0);
};

countSmileys([":---)", "))", ";~~D", ";D"]);
countSmileys([":)", ";(", ";}", ":-D"]);
countSmileys([";D", ":-(", ":-)", ";~)"]);
countSmileys([";]", ":[", ";*", ":$", ";-D"]);
