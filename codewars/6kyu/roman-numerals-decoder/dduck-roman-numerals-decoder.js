// Roman Numerals Decoder
// roman-numerals-decoder
// https://www.codewars.com/kata/51b6249c4612257ac0000005/

const romanSymbolMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const solution = (roman) => {
  let convertedNumbers = roman.split('').map((v) => romanSymbolMap[v]);
  let hasMixedValue = false;
  let targetValue = 0;
  let restValue = 0;
  
  do {
    hasMixedValue = false;
    
    convertedNumbers.reduce((acc, cur) => {
      if (acc < cur) {
      hasMixedValue = true;
      targetValue = cur;
    }
    return cur;
  });
    
    if (hasMixedValue) {
      restValue += convertedNumbers.filter((v) => v < targetValue).reduce((acc, cur) => acc + cur);
      convertedNumbers = convertedNumbers.filter((v) => v >= targetValue);
    }
  } while (hasMixedValue);
  
  return convertedNumbers.reduce((acc, cur) => acc + cur) - restValue;
};


// test code
console.log(solution('XXI'), 21);
console.log(solution('I'), 1);
console.log(solution('IV'), 4);
console.log(solution('MMVIII'), 2008);
console.log(solution('MDCLXVI'), 1666);
