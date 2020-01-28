// https://www.codewars.com/kata/55caf1fd8063ddfa8e000018

const arithmeticSequenceElements = (a, r, n, arr = [a]) => {
  if (n < 2) {
    return arr.join(', ');
  }
  arr.push(arr.slice(-1).pop() + r);
  return arithmeticSequenceElements(a, r, n - 1, arr);
};

console.log(arithmeticSequenceElements(1, 2, 5), "1, 3, 5, 7, 9");
console.log(arithmeticSequenceElements(1, 0, 5), "1, 1, 1, 1, 1");
console.log(arithmeticSequenceElements(1, -3, 10), "1, -2, -5, -8, -11, -14, -17, -20, -23, -26");
console.log(arithmeticSequenceElements(100, -10, 10), "100, 90, 80, 70, 60, 50, 40, 30, 20, 10");
