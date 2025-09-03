// [JS][7kyu] Test's results
// test-s-results
// https://www.codewars.com/kata/599db0a227ca9f294b0000c8/train/javascript

const getRoundNumber = (number, count) => {
  const factor = Math.pow(10, count)
  return Math.round(number * factor) / factor
}
const getGrade = (num) => {
  if (num > 8) {
    return 'h'
  } else if (num > 6) {
    return 'a'
  } else {
    return 'l'
  }
}
const testResult = (array) => {
  const average = array.reduce((acc, curr) => acc + curr, 0) / array.length
  const roundedAverage = getRoundNumber(average, 3)
  const map = { h: 0, a: 0, l: 0 }
  array.forEach((item) => {
    const grade = getGrade(item)
    map[grade] += 1
  })
  if (map['a'] === 0 && map['l'] === 0 && map['h'] !== 0) {
    return [roundedAverage, map, 'They did well']
  }
  return [roundedAverage, map]
}

testResult([10, 9, 9, 10, 9, 10, 9])
testResult([5, 6, 4, 8, 9, 8, 9, 10, 10, 10])
testResult([5, 6, 5, 7, 4, 5, 6, 6, 5])
testResult([9, 8, 7, 6, 9, 8, 10, 7, 6])
testResult([9, 10, 10, 10, 10, 10, 8, 9, 7, 8, 10])
testResult([3, 5, 6, 10, 8, 4, 10, 9])
testResult([10, 9, 9, 10, 9, 10])
testResult([7, 6, 8, 9, 6, 7, 5, 9])
testResult([9, 9, 8, 9, 8, 9])
testResult([10, 9, 6, 7, 10, 8, 9, 10])
