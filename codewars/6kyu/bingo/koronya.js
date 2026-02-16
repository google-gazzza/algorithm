// [JS][6kyu] Bingo!
// bingo
// https://www.codewars.com/kata/5af304892c5061951e0000ce/train/javascript

const isBingo = (arr) => {
  const rowLen = arr.length
  const isRowBingo = arr.some((row) => row.every((cell) => cell === true))
  const isColumnBingo = arr[0].some((_, columnIndex) => arr.every((row) => row[columnIndex] === true))
  const isDiagonalBingo1 = arr.every((row, index) => row[index] === true)
  const isDiagonalBingo2 = arr.every((row, index) => row[rowLen - 1 - index] === true)

  return isRowBingo || isColumnBingo || isDiagonalBingo1 || isDiagonalBingo2
}

const bingo = (card, numbers) => {
  const cardArr = card.map((row) => [...row])
  cardArr[3][2] = true
  numbers.forEach((number) => {
    const column = number[0]
    const num = parseInt(number.slice(1), 10)
    const columnIndex = cardArr[0].indexOf(column)
    if (columnIndex !== -1) {
      for (let row = 1; row < cardArr.length; row += 1) {
        if (cardArr[row][columnIndex] === num) {
          cardArr[row][columnIndex] = true
          break
        }
      }
    }
  })

  const arr = cardArr.slice(1)

  return isBingo(arr)
}

const card = [
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69],
]

const a = ['B1', 'I16', 'N31', 'G46', 'O61']
const b = ['B1', 'I16', 'N31', 'G46', 'O63']
const c = ['B1', 'I16', 'N31', 'G46']
const d = ['B1', 'I16', 'N31', 'G46', 'O63', 'O61']

// bingo(card, a)
// bingo(card, b)
// bingo(card, c)
// bingo(card, d)
