// [Medium] 1010. Pairs of Songs With Total Durations Divisible by 60
// 1010_pairs_of_songs_with_total_durations_divisible_by_60

// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60
// Runtime: 80 ms, faster than 81.07% of JavaScript online submissions for Pairs of Songs With Total Durations Divisible by 60.
// Memory Usage: 47 MB, less than 23.97% of JavaScript online submissions for Pairs of Songs With Total Durations Divisible by 60.

const getMirrorNumber = (num) => {
  return 60 - num
}

/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = function (time) {
  const newTime = time.map((item) => item % 60)
  let result = 0
  const newMap = new Map()
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

const numPairsDivisibleBy60_2 = function (time) {
  let result = 0
  const timeLen = time.length
  for (let i = 0; i < timeLen; i += 1 || 0) {
    const timeA = time[i]
    for (let j = i + 1; j < timeLen; j += 1 || 0) {
      if ((timeA + time[j]) % 60 === 0) {
        result += 1
      }
    }
  }

  return result
}

// numPairsDivisibleBy60([30, 20, 150, 100, 40])
// numPairsDivisibleBy60_2([30, 20, 150, 100, 40])
// numPairsDivisibleBy60([30, 20, 150, 100, 40, 40, 20])
// numPairsDivisibleBy60_2([30, 20, 150, 100, 40, 40, 20])
// 
numPairsDivisibleBy60([60, 60, 60])
// numPairsDivisibleBy60([418, 204, 77, 278, 239, 457, 284, 263, 372, 279, 476, 416, 360, 18])

