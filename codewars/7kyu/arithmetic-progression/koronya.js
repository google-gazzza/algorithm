// [JS][7kyu] Arithmetic progression
// arithmetic-progression
// https://www.codewars.com/kata/55caf1fd8063ddfa8e000018/train/javascript

const arithmeticSequenceElements = (a, d, n) => {
  if (n === 0) {
    return ''
  }
  return Array.from({ length: n })
    .map((_, i) => a + d * i)
    .join(', ')
}

arithmeticSequenceElements(1, 2, 5) === '1, 3, 5, 7, 9'
arithmeticSequenceElements(1, 0, 5) === '1, 1, 1, 1, 1'
arithmeticSequenceElements(1, -3, 10) === '1, -2, -5, -8, -11, -14, -17, -20, -23, -26'
arithmeticSequenceElements(100, -10, 10) === '100, 90, 80, 70, 60, 50, 40, 30, 20, 10'
