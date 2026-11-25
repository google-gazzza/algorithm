// [JS][7kyu] Tetration
// tetration
// https://www.codewars.com/kata/5797bbb34be9127074000132/train/javascript

const tetration = (x, y) => {
  let result = 1
  while (y > 0) {
    result = x ** result
    y -= 1
  }
  return result
}

tetration(4, 0) === 1
tetration(7, 1) === 7
tetration(5, 2) === 3125
tetration(2, 3) === 16
