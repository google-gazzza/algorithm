// [Medium] 2125. Number of Laser Beams in a Bank
// 2125_number_of_laser_beams_in_a_bank

// https://leetcode.com/problems/number-of-laser-beams-in-a-bank
// Runtime: 120 ms, faster than 87.50% of TypeScript online submissions for Number of Laser Beams in a Bank.
// Memory Usage: 49.4 MB, less than 56.25% of TypeScript online submissions for Number of Laser Beams in a Bank.

const countOfOne = (str: string): number => str.split('').filter((s) => s === '1').length

function numberOfBeams(bank: string[]): number {
  let result: number = 0
  let prevValid: number = 0
  bank.forEach((item) => {
    const count: number = countOfOne(item)
    if (count > 0) {
      result += prevValid * count
      prevValid = count
    }
  })

  return result
}
