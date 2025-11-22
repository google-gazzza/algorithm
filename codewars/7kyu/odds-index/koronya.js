// [JS][7kyu] Odds-Index
// odds-index
// https://www.codewars.com/kata/5a941f4e1a60f6e8a70025fe/train/javascript

const oddBall = (arr) => {
  const findOddIndex = arr.indexOf('odd')
  return arr.some((val) => val === findOddIndex)
}

oddBall(['even', 4, 'even', 7, 'even', 55, 'even', 6, 'even', 10, 'odd', 3, 'even']) === true
oddBall(['even', 4, 'even', 7, 'even', 55, 'even', 6, 'even', 9, 'odd', 3, 'even']) === false
oddBall(['even', 10, 'odd', 2, 'even']) === true
