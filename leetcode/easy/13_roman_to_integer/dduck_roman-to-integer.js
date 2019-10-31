// https://leetcode.com/problems/roman-to-integer/

const parseRomanToInt = (char) => {
  switch (char) {
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return 1;
  }
};
const parseRomanToIntArray = (s) => s.split('').map((v) => parseRomanToInt(v));

const romanToInt = (s) => {
  const intArray = parseRomanToIntArray(s);
  let sum = 0;
  
  for (let i = 0; i < intArray.length; i += 1) {
    if ((intArray[i + 1] / intArray[i]) % 5 === 0) {
      sum += intArray[i + 1] - intArray[i];
      i += 1;
    } else {
      sum += intArray[i];
    }
  }
  return sum;
};


console.log(romanToInt("IIIV"));
//?

console.log(romanToInt("III"));
//3

console.log(romanToInt("IV"));
//4

console.log(romanToInt("IX"));
//9

console.log(romanToInt("LVIII"));
//58

console.log(romanToInt("MCMXCIV"));
// 1994

