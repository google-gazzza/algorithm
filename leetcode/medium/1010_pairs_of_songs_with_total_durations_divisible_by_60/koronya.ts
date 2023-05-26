// [Medium] 1010. Pairs of Songs With Total Durations Divisible by 60
// 1010_pairs_of_songs_with_total_durations_divisible_by_60

// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60
// Runtime: 119 ms, faster than 33.33% of TypeScript online submissions for Pairs of Songs With Total Durations Divisible by 60.
// Memory Usage: 48.5 MB, less than 8.33% of TypeScript online submissions for Pairs of Songs With Total Durations Divisible by 60.

const getMirrorNumber = (num: number): number => {
  return 60 - num
}

function numPairsDivisibleBy60(time: number[]): number {
  const newTime = time.map((item) => item % 60)
  let result = 0
  const newMap = new Map<number, number>()
  newTime.forEach((item) => {
    newMap.set(item, (newMap.get(item) || 0) + 1)
  })
  const sortedArr = [...newMap].sort((a, b) => a[0] - b[0])
  const sortedArrLen = sortedArr.length
  let index = 0
  while (index < sortedArrLen) {
    const [num, count] = sortedArr[index]
    if (num > 30) {
      break
    }
    if (num === 30) {
      result += (count * (count - 1)) / 2
    } else if (num === 0) {
      const adjustCount = count + (newMap.get(getMirrorNumber(num)) || 0)
      result += (adjustCount * (adjustCount - 1)) / 2
    } else {
      result += count * (newMap.get(getMirrorNumber(num)) || 0)
    }
    index += 1
  }

  return result
}
