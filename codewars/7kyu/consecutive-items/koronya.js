// [JS][7kyu] Consecutive items
// consecutive-items
// https://www.codewars.com/kata/5f6d533e1475f30001e47514/train/javascript

const consecutive = (arr, a, b) => {
  const indexOfA = arr.indexOf(a)
  const indexOfB = arr.indexOf(b)
  return Math.abs(indexOfA - indexOfB) === 1
}

consecutive([1, 3, 5, 7], 3, 7) === false
consecutive([1, 3, 5, 7], 3, 1) === true
consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4) === true
