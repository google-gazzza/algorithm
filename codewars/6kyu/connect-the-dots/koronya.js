// [JS][6kyu] Connect the Dots
// connect-the-dots
// https://www.codewars.com/kata/5d6a11ab2a1ef8001dd1e817/train/javascript

const isLowerAlphabet = (str) => /^[a-z]$/.test(str)

const connectTheDots = (paper) => {
  const arr = paper.split('\n')
  const rowLen = arr.length
  const colLen = arr[0].length
  const strMap = new Map()
  for (let i = 0; i < rowLen; i += 1 || 0) {
    for (let j = 0; j < colLen; j += 1 || 0) {
      const char = arr[i][j]
      if (isLowerAlphabet(char)) {
        strMap.set(char, { row: i, col: j })
      }
    }
  }
  const strSortArr = [...strMap].sort((a, b) => a[0][0].localeCompare(b[0][0]))
  const resultArr = Array.from(Array(rowLen), () => Array(colLen).fill(' '))

  const drawLine = (start, end) => {
    const { row: startRow, col: startCol } = start[1]
    const { row: endRow, col: endCol } = end[1]
    if (startRow === endRow) {
      // 가로선
      const beforeCol = startCol < endCol ? startCol : endCol
      const afterCol = startCol < endCol ? endCol : startCol
      for (let i = beforeCol; i <= afterCol; i += 1 || 0) {
        resultArr[startRow][i] = '*'
      }
    } else if (startCol === endCol) {
      // 세로선
      const beforeRow = startRow < endRow ? startRow : endRow
      const afterRow = startRow < endRow ? endRow : startRow
      for (let i = beforeRow; i <= afterRow; i += 1 || 0) {
        resultArr[i][startCol] = '*'
      }
    } else {
      // 대각선
      const beforeCol = startCol < endCol ? startCol : endCol
      const afterCol = startCol < endCol ? endCol : startCol
      const isPlusSlope = (endRow - startRow) / (endCol - startCol) > 0
      if (isPlusSlope) {
        let beforeRow = startRow < endRow ? startRow : endRow
        for (let i = beforeCol; i <= afterCol; i += 1 || 0) {
          resultArr[beforeRow][i] = '*'
          beforeRow += 1
        }
      } else {
        let beforeRow = startRow < endRow ? endRow : startRow
        for (let i = beforeCol; i <= afterCol; i += 1 || 0) {
          resultArr[beforeRow][i] = '*'
          beforeRow -= 1
        }
      }
    }
  }

  let prev = null
  strSortArr.forEach((item) => {
    if (!prev) {
      prev = item
      return
    }
    const now = item
    drawLine(prev, now)
    prev = item
  })

  resultArr.pop()
  return resultArr.map((row) => row.join('')).join('\n') + '\n'
}

// prettier-ignore
const inp = 
    "           \n" +
    " a       b \n" +
    " e         \n" +
    "           \n" +      
    " d       c \n" +
    "           \n"

// prettier-ignore
const out =         
    "           \n" +
    " ********* \n" +
    " *       * \n" +
    " *       * \n" +      
    " ********* \n" +
    "           \n"

connectTheDots(inp)
connectTheDots(inp) === out

// prettier-ignore
var inp2 = 
    "           \n" +
    "     a     \n" +
    "    e      \n" +
    "           \n" +      
    "  d     b  \n" +
    "           \n" +      
    "           \n" +
    "     c     \n" +
    "           \n";

// connectTheDots(inp2)
