// [JS][7kyu] Knight vs Bishop
// knight-vs-bishop
// https://www.codewars.com/kata/564e21ba7cd824845b000097/train/javascript

const getDiffRow = (a, b) => Math.abs(a - b)
const getDiffCol = (a, b) => Math.abs(a.charCodeAt() - b.charCodeAt())

const knightVsBishop = (knightPosition, bishopPosition) => {
  const [knightRow, knightCol] = knightPosition
  const [bishopRow, bishopCol] = bishopPosition
  const diffRow = getDiffRow(knightRow, bishopRow)
  const diffCol = getDiffCol(knightCol, bishopCol)

  if ((diffRow === 2 && diffCol === 1) || (diffRow === 1 && diffCol === 2)) {
    return 'Knight'
  }
  if (diffRow === diffCol) {
    return 'Bishop'
  }
  return 'None'
}

knightVsBishop([4, 'C'], [6, 'D']) === 'Knight'
knightVsBishop([2, 'G'], [6, 'C']) === 'Bishop'
knightVsBishop([2, 'F'], [7, 'B']) === 'None'
knightVsBishop([1, 'A'], [2, 'C']) === 'Knight'
