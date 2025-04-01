// [JS][7kyu] maxPossibleScore
// max-possible-score
// https://www.codewars.com/kata/59656c69253c365e58000046/train/javascript

const maxPossibleScore = (obj, arr) => {
  let score = 0
  Object.keys(obj).forEach((key) => {
    if (arr.includes(key)) {
      score += obj[key] * 2
    } else {
      score += obj[key]
    }
  })
  return score
}

maxPossibleScore({ a: 1 }, []) === 1
maxPossibleScore({ a: 1 }, ['a']) === 2
maxPossibleScore({ a: 1, b: 14 }, ['b']) === 29
maxPossibleScore({ a: 1, b: 2, c: 4 }, ['a', 'b', 'c']) === 14
maxPossibleScore({ a: 2, b: 5, c: 8 }, ['c']) === 23
