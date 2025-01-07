// [JS][7kyu] Simple Fun #62: Draw Rectangle
// simple-fun-62-draw-rectanglee
// https://www.codewars.com/kata/5889ae4f7af7f99a9a000019/train/javascript

const drawRectangle = (canvas, rectangle) => {
  const [x1, y1, x2, y2] = rectangle
  for (let col = x1 + 1; col < x2; col += 1) {
    canvas[y1][col] = '-'
    canvas[y2][col] = '-'
  }
  canvas[y1][x1] = '*'
  canvas[y1][x2] = '*'
  canvas[y2][x1] = '*'
  canvas[y2][x2] = '*'

  for (let row = y1 + 1; row < y2; row += 1) {
    canvas[row][x1] = '|'
    canvas[row][x2] = '|'
  }

  return canvas
}

const canvas = [
  ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
  ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
  ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
  ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
]
const rectangle = [1, 1, 4, 3]
