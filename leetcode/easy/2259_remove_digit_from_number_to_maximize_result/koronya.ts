// [Easy] 2259. Remove Digit From Number to Maximize Result
// 2259_remove_digit_from_number_to_maximize_result

// https://leetcode.com/problems/remove-digit-from-number-to-maximize-result
// Runtime: 78 ms, faster than 88.89% of TypeScript online submissions for Remove Digit From Number to Maximize Result.
// Memory Usage: 48.6 MB, less than 5.56% of TypeScript online submissions for Remove Digit From Number to Maximize Result.

function removeDigit(number: string, digit: string): string {
  const numberArr = number.split('')
  const indexArr = []
  let index = numberArr.indexOf(digit)
  while (index !== -1) {
    indexArr.push(index)
    index = numberArr.indexOf(digit, index + 1)
  }
  const resultArr = indexArr.map((item) => {
    const dupArr = [...numberArr]
    dupArr.splice(Number(item), 1)
    return dupArr.reduce((acc, cur) => acc + cur, '')
  })

  resultArr.sort()
  return resultArr[resultArr.length - 1]
}
