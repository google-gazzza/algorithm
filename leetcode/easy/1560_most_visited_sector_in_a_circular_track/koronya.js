// [Easy] 1560. Most Visited Sector in a Circular Track
// 1560_most_visited_sector_in_a_circular_track

// https://leetcode.com/problems/most-visited-sector-in-a-circular-track
// Runtime: 84 ms, faster than 84.64% of JavaScript online submissions for Most Visited Sector in a Circular Track.
// Memory Usage: 40 MB, less than 5.99% of JavaScript online submissions for Most Visited Sector in a Circular Track.
const findMaxIndex = arr => {
  const max = Math.max(...arr)
  const maxArr = []
  arr.forEach((item, index) => {
    if (item === max) {
      maxArr.push(index + 1)
    }
  })
  return maxArr
}

const mostVisited = (n, rounds) => {
  const nArr = Array.from({length: n}, _ => 0)
  const roundsLen = rounds.length
  const iterate = (start, end) => {
    let target = start
    while (target !== end) {
      if (target === n) {
        target = 1
      } else {
        target += 1
      }
      nArr[target - 1] += 1
    }
  }
  let prev = rounds[0]
  nArr[prev - 1] = 1
  for (let i = 1; i < roundsLen; i = i + 1 | 0) {
    const round = rounds[i]
    iterate(prev, round)
    prev = round
  }

  return findMaxIndex(nArr)
}
