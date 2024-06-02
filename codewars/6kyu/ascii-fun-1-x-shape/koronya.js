// [JS][6kyu] ASCII Fun #1: X- Shape
// ascii-fun-1-x-shape
// https://www.codewars.com/kata/5906436806d25f846400009b/train/javascript

const BLACK_CHAR = '□'
const WHITE_CHAR = '■'

const x = (n) => {
  const arr = Array.from({ length: n }, () => Array.from({ length: n }, () => BLACK_CHAR))
  return arr
    .map((row, i) => {
      row[i] = WHITE_CHAR
      row[n - 1 - i] = WHITE_CHAR
      row
      return row.join('')
    })
    .join('\n')
}

x(3) === '■□■\n□■□\n■□■'
x(5) === '■□□□■\n□■□■□\n□□■□□\n□■□■□\n■□□□■'
