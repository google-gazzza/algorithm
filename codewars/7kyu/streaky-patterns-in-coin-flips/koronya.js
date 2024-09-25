// [JS][7kyu] Streaky Patterns in Coin Flips
// streaky-patterns-in-coin-flips
// https://www.codewars.com/kata/5c1ac4f002c59c725900003f/train/javascript

/**
 * Checks if a sequence of coin flips has a specific streak pattern.
 * @param {string} sequence The sequence of coin flips, where 'H' is heads and 'T' is tails.
 * @param {number} l Length of each streak.
 * @param {number} n Number of streaks in the sequence.
 * @returns {boolean} `true` if the sequence has the pattern, `false` otherwise.
 */
const checkSequence = (sequence, l, n) => {
  const result = []
  let stCount = 1
  let prevStr = sequence[0]
  const sequenceLength = sequence.length
  for (let i = 1; i < sequenceLength; i += 1) {
    const currentStr = sequence[i]
    if (prevStr === currentStr) {
      stCount += 1
    } else {
      result.push(stCount)
      stCount = 1
    }
    prevStr = currentStr
  }
  result.push(stCount)

  return result.filter((num) => num === l).length === n
}

checkSequence('THHHTHHHT', 3, 2) === true
checkSequence('THTTH', 2, 1) === true
checkSequence('HHHTTHTHHTHTHHHTTTTTHT', 5, 1) === true
checkSequence('TT', 2, 1) === true
checkSequence('HTHHHTTHHTHHHHHTTTHTHTTHTTTHH', 3, 3) === true

checkSequence('THHHH', 3, 1) === false
checkSequence('TTTT', 2, 2) === false
