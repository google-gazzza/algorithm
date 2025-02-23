// [JS][5kyu] Fill an array with numbers and their square
// fill-an-array-with-numbers-and-their-square
// https://www.codewars.com/kata/582806c7e03d81de07000975/train/javascript

// 1 3 6 10 15 ...
// n * (n + 1) / 2
const getN = (x) => {
  return (Math.sqrt(8 * x + 1) - 1) / 2
}

const makeMatrix = (seq) => {
  const duplicateSeq = [...seq]
  const seqLen = seq.length
  const colLen = getN(seqLen)
  if (colLen !== Math.floor(colLen)) {
    return []
  }
  const rowLen = colLen + 1
  const resultArr = Array.from({ length: rowLen }).map(() => Array.from({ length: colLen }))

  for (let row = 0; row < rowLen; row += 1 || 0) {
    for (let col = 0; col < colLen - row; col += 1 || 0) {
      resultArr[row][col] = duplicateSeq.shift()
    }
  }
  for (let row = 1; row < rowLen; row += 1) {
    for (let col = 0; col < row; col += 1 || 0) {
      resultArr[row][colLen - row + col] = seq.shift() ** 2
    }
  }

  return resultArr
}

makeMatrix([1, 2, 3, 4, 5, 6])
// makeMatrix([1, 2, 3])
// makeMatrix([2])

// makeMatrix([1, 2, 3, 4])
