// [JS][6kyu] Find Cracker.
// find-cracker
// https://www.codewars.com/kata/59f70440bee845599c000085/train/javascript

const getScore = (grade) => {
  switch (grade) {
    case 'A':
      return 30
    case 'B':
      return 20
    case 'C':
      return 10
    case 'D':
      return 5
    default:
      return 0
  }
}

const findHack = (arr) => {
  return arr
    .filter(([_, score, scoreArr]) => {
      const mappedScoreArr = scoreArr.map((v) => getScore(v))
      const getAdditionalPoint = mappedScoreArr.filter((v) => v >= 20).length >= 5
      const sum = mappedScoreArr.reduce((acc, cur) => acc + cur, 0) + (getAdditionalPoint ? 20 : 0)
      return sum < score
    })
    .map(([name]) => name)
}

findHack([
  ['name1', 150, ['B', 'A', 'A', 'C', 'A', 'A']],
  ['name2', 120, ['B', 'A', 'A', 'A']],
  ['name3', 160, ['B', 'A', 'A', 'A', 'A']],
  ['name4', 140, ['B', 'A', 'A', 'C', 'A']],
])
