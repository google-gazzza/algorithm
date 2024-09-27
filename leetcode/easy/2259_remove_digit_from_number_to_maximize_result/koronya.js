// [Easy] 2259. Remove Digit From Number to Maximize Result
// 2259_remove_digit_from_number_to_maximize_result

// https://leetcode.com/problems/remove-digit-from-number-to-maximize-result
// Runtime: 69 ms, faster than 81.64% of JavaScript online submissions for Remove Digit From Number to Maximize Result.
// Memory Usage: 45.6 MB, less than 5.31% of JavaScript online submissions for Remove Digit From Number to Maximize Result.

/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
const removeDigit = function (number, digit) {
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

// 오답...
const removeDigit2 = function (number, digit) {
  const numberArr = number.split('')
  const indexArr = []
  let index = numberArr.indexOf(digit)
  while (index !== -1) {
    indexArr.push(index)
    index = numberArr.indexOf(digit, index + 1)
  }
  const ddd = indexArr.map((item) => {
    const dupArr = [...numberArr]
    dupArr.splice(Number(item), 1)
    return Number(dupArr.reduce((acc, cur) => acc + cur, ''))
  })

  return String(Math.max(...ddd))
}

removeDigit('123', '3')
removeDigit('1231', '1')
removeDigit('551', '5')
removeDigit('133235', '3')
// removeDigit('2998589353917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471', '3')
