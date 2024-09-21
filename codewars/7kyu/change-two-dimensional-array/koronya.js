// [JS][7kyu] Change two-dimensional array
// change-two-dimensional-array
// https://www.codewars.com/kata/581214d54624a8232100005f/train/javascript

const matrix = (array) => {
  return array.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      if (rowIndex !== colIndex) {
        return col
      }
      return col >= 0 ? 1 : 0
    })
  })
}

// prettier-ignore
matrix([[-1, 4, -5, -9, 3], [6, -4, -7, 4, -5], [3, 5, 4, -9, -1], [1, 5, -7, -8, -9], [-3, 2, 1, -5, 6]])

// prettier-ignore
matrix([[-1, 4, -5, -9, 3],[6, 8, -7, 4, -5],[3, 5, 1, -9, -1],[1, 5, -7, 15, -9],[-3, 2, 1, -5, -6]])

// prettier-ignore
matrix([[-1, 4, -5, -9, 3, 8],[6, 8, -7, 4, -5, -1],[3, 5, 1, -9, -1, 6],[1, 5, -7, 15, -9, 3],[-3, 2, 1, -5, -6, 0],[8, 2, 0, -2, 4, -5]])

// prettier-ignore
matrix([[1, 1, -5, 5],[2, -4, 11, 2],[3, 1, -1, 4],[2, -6, 8, 10]])
