// [JS][6kyu] Feynman's square question
// feynman-s-square-question
// https://www.codewars.com/kata/551186edce486caa61000f5c/train/javascript

const getNthValue = (n) => {
  let result = 1
  for (let i = 2; i <= n; i += 1) {
    result += 1 + 2 * (i - 1)
  }
  return result
}

const countSquares = (n) => Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => acc + getNthValue(cur), 0)

countSquares(1) === 1
countSquares(2) === 5
countSquares(5) === 55
countSquares(15) === 1240
