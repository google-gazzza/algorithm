// [JS][5kyu] Land perimeter
// land-perimeter
// https://www.codewars.com/kata/5839c48f0cf94640a20001d3/train/javascript

const landPerimeter = (arr) => {
  const rowlen = arr.length
  const colLen = arr[0].length
  let result = 0
  for (let row = 0; row < rowlen; row += 1) {
    for (let col = 0; col < colLen; col += 1) {
      const point = arr[row][col]
      if (point === 'X') {
        let count = 0
        if (col === 0 || arr[row][col - 1] === 'O') {
          count += 1
        }
        if (col === colLen - 1 || arr[row][col + 1] === 'O') {
          count += 1
        }
        if (row === 0 || arr[row - 1][col] === 'O') {
          count += 1
        }
        if (row === rowlen - 1 || arr[row + 1][col] === 'O') {
          count += 1
        }
        result += count
      }
    }
  }

  return `Total land perimeter: ${result}`
}

landPerimeter(['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO'])
landPerimeter(['XOOO', 'XOXO', 'XOXO', 'OOXX', 'OOOO'])

landPerimeter(['OXOOOX', 'OXOXOO', 'XXOOOX', 'OXXXOO', 'OOXOOX', 'OXOOOO', 'OOXOOX', 'OOXOOO', 'OXOOOO', 'OXOOXX'])
landPerimeter(['OXOOO', 'OOXXX', 'OXXOO', 'XOOOO', 'XOOOO', 'XXXOO', 'XOXOO', 'OOOXO', 'OXOOX', 'XOOOO', 'OOOXO'])
landPerimeter(['XXXXXOOO', 'OOXOOOOO', 'OOOOOOXO', 'XXXOOOXO', 'OXOXXOOX'])
landPerimeter(['XOOOXOO', 'OXOOOOO', 'XOXOXOO', 'OXOXXOO', 'OOOOOXX', 'OOOXOXX', 'XXXXOXO'])
landPerimeter(['OOOOXO', 'XOXOOX', 'XXOXOX', 'XOXOOO', 'OOOOOO', 'OOOXOO', 'OOXXOO'])
