// [JS][7kyu] Find all non-consecutive numbers
// find-all-non-consecutive-numbers
// https://www.codewars.com/kata/58f8b35fda19c0c79400020f/train/javascript

const allNonConsecutive = (arr) => {
  const result = []
  const arrLen = arr.length
  for (let i = 1; i < arrLen; i += 1) {
    const num = arr[i]
    if (num !== arr[i - 1] + 1) {
      result.push({ i: i, n: num })
    }
  }
  return result
}

allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10])
