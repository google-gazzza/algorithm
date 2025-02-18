// [JS][7kyu] Drawing a Cross!
// drawing-a-cross
// https://www.codewars.com/kata/5a036ecb2b651d696f00007c/train/javascript

const makeStr = (size, start, end) => {
  const arr = Array(size).fill(' ')
  arr[start] = 'x'
  arr[end] = 'x'
  return arr.join('')
}

const drawACross = (n) => {
  if (n < 3) {
    return 'Not possible to draw cross for grids less than 3x3!'
  }
  if (n % 2 === 0) {
    return 'Centered cross not possible!'
  }

  let start = 0
  let end = n - 1
  const arr = []
  for (let i = 0; i < n; i += 1 || 0) {
    arr.push(makeStr(n, start + i, end - i))
  }

  return arr.join('\n')
}

//   drawACross(7)
// drawACross(2)
