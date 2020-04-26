// Valid Braces
// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

const bracesDetectRegExp = new RegExp(/\(\)|\[\]|\{\}/, 'g');

const validBraces = (braces = '') => {
  if (braces.match(bracesDetectRegExp)) {
    return validBraces(braces.replace(bracesDetectRegExp, ''));
  }
  return !braces.length;
};


console.log(validBraces("(){}[]"), true);
console.log(validBraces("([{}])"), true);
console.log(validBraces("(}"), false);
console.log(validBraces("[(])"), false);
console.log(validBraces("[({})](]"), false);
