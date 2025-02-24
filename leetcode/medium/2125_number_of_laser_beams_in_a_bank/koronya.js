// [Medium] 2125. Number of Laser Beams in a Bank
// 2125_number_of_laser_beams_in_a_bank

// https://leetcode.com/problems/number-of-laser-beams-in-a-bank
// Runtime: 116 ms, faster than 89.78% of JavaScript online submissions for Number of Laser Beams in a Bank.
// Memory Usage: 48.2 MB, less than 46.72% of JavaScript online submissions for Number of Laser Beams in a Bank.

const countOfOne = (str) => str.split('').filter((s) => s === '1').length

/**
 * @param {string[]} bank
 * @return {number}
 */
const numberOfBeams = function (bank) {
  let result = 0
  let prevValid = 0
  bank.forEach((item) => {
    const count = countOfOne(item)
    if (count > 0) {
      result += prevValid * count
      prevValid = count
    }
  })

  return result
}

numberOfBeams(['011001', '000000', '010100', '001000']) //?
numberOfBeams(['000', '111', '000']) //?
