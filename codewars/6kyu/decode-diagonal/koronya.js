// [JS][6kyu] Decode Diagonal
// decode-diagonal
// https://www.codewars.com/kata/55af0d33f9b829d0a800008d/train/javascript

const getDiagonalCode = (grid) => {
  const arr = grid.split('\n').map((item) => item.split(' ').filter((item) => item !== ''))
  const result = []
  const rowLen = arr.length
  let isDown = true
  let row = 0
  let col = 0
  while (true) {
    if (rowLen <= row || arr[row].length <= col) {
      break
    }
    const item = arr[row][col]
    result.push(item)

    if (isDown === true && row === rowLen - 1) {
      isDown = false
    }

    if (isDown === false && row === 0) {
      isDown = true
    }

    row = isDown ? row + 1 : row - 1
    col += 1
  }

  return result.join('')
}

// prettier-ignore
const grid = ( 
  "C \n" +
  "D o F C A E A s ! \n" +
  "G H d E L A r \n" +
  "L M N e P a F \n" +
  "X Z R P W"
  );

getDiagonalCode(grid)

// prettier-ignore
const grid2 = 
( 
  "C \n" +
  "D o"
)
getDiagonalCode(grid2)
