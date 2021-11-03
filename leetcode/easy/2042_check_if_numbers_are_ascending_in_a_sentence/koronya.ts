// [Easy] 2042. Check if Numbers Are Ascending in a Sentence
// 2042_check_if_numbers_are_ascending_in_a_sentence

// https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence
// Runtime: 68 ms, faster than 100.00% of TypeScript online submissions for Check if Numbers Are Ascending in a Sentence.
// Memory Usage: 40.8 MB, less than 25.93% of TypeScript online submissions for Check if Numbers Are Ascending in a Sentence.

function areNumbersAscending(s: string): boolean {
  const numberArr = s
    .split(' ')
    .filter((str) => Number.isInteger(Number(str)) === true)
    .map((item) => Number(item))
  let prev = numberArr[0]
  const numberArrLen = numberArr.length
  for (let i: number = 1; i < numberArrLen; i += 1) {
    const num = numberArr[i]
    if (prev >= num) {
      return false
    }
    prev = num
  }
  return true
}

areNumbersAscending('1 box has 3 blue 4 red 6 green and 12 yellow marbles') //?
areNumbersAscending('hello world 5 x 5') //?
areNumbersAscending('sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s') //?
areNumbersAscending('4 5 11 26') //?
