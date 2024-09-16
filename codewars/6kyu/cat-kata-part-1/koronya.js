// [JS][6kyu] Cat Kata, Part 1
// cat-kata-part-1
// https://www.codewars.com/kata/5869848f2d52095be20001d1/train/javascript

const findIndex = (yard, cat) => {
  const rowLen = yard.length
  for (let row = 0; row < rowLen; row += 1 || 0) {
    const colIndex = yard[row].indexOf(cat)
    if (colIndex !== -1) {
      return [row, colIndex]
    }
  }
  return null
}

const peacefulYard = (yard, minDistance) => {
  const lIndex = findIndex(yard, 'L')
  const mIndex = findIndex(yard, 'M')
  const rIndex = findIndex(yard, 'R')
  const lM = lIndex && mIndex ? Math.sqrt((lIndex[0] - mIndex[0]) ** 2 + (lIndex[1] - mIndex[1]) ** 2) : 0
  const lR = lIndex && rIndex ? Math.sqrt((lIndex[0] - rIndex[0]) ** 2 + (lIndex[1] - rIndex[1]) ** 2) : 0
  const mR = mIndex && rIndex ? Math.sqrt((mIndex[0] - rIndex[0]) ** 2 + (mIndex[1] - rIndex[1]) ** 2) : 0
  const filteredDistance = [lM, lR, mR].filter((distance) => distance !== 0)
  const minDistanceValue = Math.min(...filteredDistance)
  return minDistanceValue >= minDistance
}

peacefulYard(['------------', '------------', '-L----------', '------------', '------------', '------------'], 10) === true
peacefulYard(['------------', '---M--------', '------------', '------------', '-------R----', '------------'], 6) === false
peacefulYard(['-----------L', '--R---------', '------------', '------------', '------------', '--M---------'], 4) === true
