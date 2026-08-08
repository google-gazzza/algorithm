// [JS][7kyu] Split By Value
// split-by-value
// https://www.codewars.com/kata/5a433c7a8f27f23bb00000dc/train/javascript

const splitByValue = (k, elements) => {
  const smallArr = []
  const normalArr = []
  elements.forEach((num) => {
    if (num < k) {
      smallArr.push(num)
    } else {
      normalArr.push(num)
    }
  })
  return [...smallArr, ...normalArr]
}

splitByValue(6, [6, 4, 10, 10, 6])
splitByValue(5, [1, 3, 5, 7, 6, 4, 2])
splitByValue(0, [5, 2, 7, 3, 2])
