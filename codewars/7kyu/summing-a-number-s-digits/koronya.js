// [JS][7kyu] Summing a number's digits
// summing-a-number-s-digits
// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

const KEYCODE_OF_0 = "0".charCodeAt(0);
const KEYCODE_OF_9 = "9".charCodeAt(0);
const isNumberString = (str) => {
  const charCode = str.charCodeAt(0);
  return charCode >= KEYCODE_OF_0 && charCode <= KEYCODE_OF_9;
};

const sumDigits = (number) => {
  return String(number)
    .split("")
    .reduce(
      (acc, cur) => (isNumberString(cur) === true ? acc + Number(cur) : acc),
      0
    );
};

sumDigits(10);
sumDigits(99);
sumDigits(-32);
