// https://www.codewars.com/kata/substring-fun/train/javascript

const nthChar = (strArr, str = '', count = 0) => {
  return strArr.length ? nthChar(strArr, str += strArr.shift()[count] || '', count + 1) : str;
};

// nthChar(['yoda', 'best', 'has']);
//?
nthChar(['']);
//?
//, 'yes');
