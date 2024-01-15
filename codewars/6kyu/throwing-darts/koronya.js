// [JS][6kyu] Throwing Darts
// throwing-darts
// https://www.codewars.com/kata/525dfedb5b62f6954d000006/train/javascript

const getScore = (point) => (point > 10 ? 0 : point >= 5 ? 5 : 10)

const scoreThrows = (radii) => {
  if (radii.length === 0) {
    return 0
  }
  let score = radii.reduce((acc, cur) => acc + getScore(cur), 0)
  if (radii.every((item) => item < 5)) {
    score += 100
  }

  return score
}

scoreThrows([1, 5, 11]) === 15
scoreThrows([15, 20, 30, 31, 32, 44, 100]) === 0
scoreThrows([1, 2, 3, 4]) === 140
scoreThrows([]) === 0, 'Empty list'
scoreThrows([1, 2, 3, 4, 5, 6, 7, 8, 9]) === 65
scoreThrows([0, 5, 10, 10.5, 4.5]) === 30
