// [JS][7kyu] Recycle!
// recycle
// https://www.codewars.com/kata/59fb783bab11f89202001083/train/javascript

const recycleMe = (recycle) => {
  let plus = 0
  let minus = 0
  let zero = 0
  recycle.forEach((num) => {
    if (num > 0) {
      plus += 1
    } else if (num < 0) {
      minus += 1
    } else {
      zero += 1
    }
  })
  return [plus, minus, zero]
}

recycleMe([5, -9, 0, 6, -84, -95, 15])
recycleMe([45, -26, -4, -66, -84, -38, 14])
