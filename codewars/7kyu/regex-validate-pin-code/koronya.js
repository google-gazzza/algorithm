// [JS][7kyu] Regex validate PIN code
// regex-validate-pin-code
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

const CHAR_CODE_AT_0 = "0".charCodeAt(0);
const CHAR_CODE_AT_9 = "9".charCodeAt(0);
const isNumberString = (str) => {
  const charCode = str.charCodeAt(0);
  return charCode >= CHAR_CODE_AT_0 && charCode <= CHAR_CODE_AT_9;
};

const validatePIN = (pin) => {
  const arr = pin.split("");
  const arrLen = arr.length;
  if (arrLen !== 4 && arrLen !== 6) {
    return false;
  }
  for (const str of arr) {
    if (isNumberString(str) === false) {
      return false;
    }
  }

  return true;
};

validatePIN("1345");
validatePIN("a345");
validatePIN("-a35");

validatePIN("1") === false;
validatePIN("12") === false;
validatePIN("123") === false;
validatePIN("12345") === false;
validatePIN("1234567") === false;
validatePIN("-1234") === false;
validatePIN("1.234") === false;
validatePIN("-1.234") === false;
validatePIN("00000000") === false;

validatePIN("a234") === false;
validatePIN(".234") === false;

validatePIN("1234") === true;
validatePIN("0000") === true;
validatePIN("1111") === true;
validatePIN("123456") === true;
validatePIN("098765") === true;
