// strongest-even-number-in-an-interval
// Strongest even number in an interval
// difficulty: 6kyu
// https://www.codewars.com/kata/5d16af632cf48200254a6244

const strongestEven = (n, m) => {
  let maxEven = m;
  let maxZero = 0;
  let currentNum = m.toString(2);
  let zeroCount = 0;
  
  while (parseInt(currentNum, 2) >= n) {
    currentNum = [...[...currentNum].reverse()
      .join('')
      .replace('1', '0')]
      .reverse()
      .join('');
    zeroCount = currentNum.match(/0+$/)[0].length;
    
    if (zeroCount > maxZero && parseInt(currentNum, 2) >= n) {
      maxZero = zeroCount;
      maxEven = parseInt(currentNum, 2);
    }
  }
  
  return maxEven;
};
