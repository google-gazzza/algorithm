// https://www.codewars.com/kata/5a7893ef0025e9eb50000013/

// functional programming style - 1
// use scope name space
const maxGap = (numbers, max = 0) => (numbers.sort((a, b) => a - b)
  .reduce((a, c) => ((c - a > max) ? max = c - a : null, c), 1), max);


// functional programming style - 2
// do not use any scope name space,
// just pass all values via parameters
const maxGap2 = (numbers) => (numbers.sort((a, b) => a - b)
  .reduce((a, c) => {
    if ((c - a[0]) > a[1]) {
      return [c, c - a[0]];
    }
    return [c, a[1]];
  }, [1, 0]))[1];


// declaration programming style
const maxGap3 = (numbers) => {
  let max = 0;
  const sortedNumber = numbers.sort((a, b) => a - b);
  
  for (let i = 0; i < sortedNumber.length - 1; i += 1) {
    const different = sortedNumber[i + 1] - sortedNumber[i];
    if (different > max) {
      max = different;
    }
  }
  
  return max;
};

console.log('================');
console.log(maxGap([13, 10, 2, 9, 5]), 4);
console.log(maxGap([13, 3, 5]), 8);
console.log(maxGap([24, 299, 131, 14, 26, 25]), 168);
console.log(maxGap([-3, -27, -4, -2]), 23);
console.log(maxGap([-7, -42, -809, -14, -12]), 767);
console.log(maxGap([12, -5, -7, 0, 290]), 278);
console.log(maxGap([-54, 37, 0, 64, -15, 640, 0]), 576);
console.log(maxGap([130, 30, 50]), 80);
// console.log(maxGap([1, 1, 1]), 0);
console.log(maxGap([-1, -1, -1]), 0);
