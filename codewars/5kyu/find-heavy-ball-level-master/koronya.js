// [JS][5kyu] Find heavy ball - level: master
// find-heavy-ball-level-master
// https://www.codewars.com/kata/544034f426bc6adda200000e/train/javascript

const findBall = (scales) => {
  const leftPan = [0, 1, 2]
  const rightPan = [3, 4, 5]
  const w = scales.getWeight(leftPan, rightPan)

  if (w === 0) {
    const leftPan = [6]
    const rightPan = [7]
    const w = scales.getWeight(leftPan, rightPan)
    return w === -1 ? 6 : 7
  }

  if (w === -1) {
    const leftPan = [0]
    const rightPan = [1]
    const w = scales.getWeight(leftPan, rightPan)
    if (w === 0) {
      return 2
    }
    if (w === -1) {
      return 0
    }
    return 1
  } else {
    const leftPan = [3]
    const rightPan = [4]
    const w = scales.getWeight(leftPan, rightPan)
    if (w === 0) {
      return 5
    }
    if (w === -1) {
      return 3
    }
    return 4
  }
}
