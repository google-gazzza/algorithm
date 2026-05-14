// [JS][7kyu] Music 1: How Many Quarter Notes?
// music-1-how-many-quarter-notes
// https://www.codewars.com/kata/69c2f04a1294ffc95c526d9e/train/javascript

const findQuarterNotes = (timeSignature) => {
  const [a, b] = timeSignature.split('/').map(Number)
  if ((Math.log(b) / Math.log(2)) % 1 !== 0) {
    return null
  }
  return Math.floor((a / b) * 4)
}

findQuarterNotes('4/4') === 4
findQuarterNotes('3/4') === 3

findQuarterNotes('6/8') === 3
findQuarterNotes('9/8') === 4

findQuarterNotes('1/8') === 0
findQuarterNotes('1/16') === 0

findQuarterNotes('9/0') === null
findQuarterNotes('7/3') === null
findQuarterNotes('6/5') === null
findQuarterNotes('5/6') === null
findQuarterNotes('3/7') === null
findQuarterNotes('0/9') === null

findQuarterNotes('7/1') === 28
findQuarterNotes('6/2') === 12
