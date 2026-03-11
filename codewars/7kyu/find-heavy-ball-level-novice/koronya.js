// [JS][7kyu] Find heavy ball - level: novice
// find-heavy-ball-level-novice
// https://www.codewars.com/kata/544047f0cf362503e000036e/train/javascript

const findBall = (scales) => {
  const firstTry = scales.getWeight([0, 1, 2], [3, 4, 5]) // first call
  if (firstTry === 0) {
    return scales.getWeight([6], [7]) === 1 ? 7 : 6
  }

  if (firstTry === 1) {
    const secondTry = scales.getWeight([3], [4])
    if (secondTry === 0) {
      return 5
    }
    return secondTry === 1 ? 4 : 3
  }
  const secondTry = scales.getWeight([0], [1])
  if (secondTry === 0) {
    return 2
  }
  return secondTry === 1 ? 1 : 0
}
