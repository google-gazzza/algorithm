// https://leetcode.com/problems/best-sightseeing-pair
// O(n). 처음에는 아래의 maxScoreSightseeingPair2로 풀었다가 너무 느려서 이걸로 다시 품!
// Runtime: 52 ms, faster than 97.37% of JavaScript online submissions for Best Sightseeing Pair.
// Memory Usage: 40.1 MB, less than 100.00% of JavaScript online submissions for Best Sightseeing Pair.
const maxScoreSightseeingPair = A => {
  const ALen = A.length
  let maxTotal = Number.MIN_SAFE_INTEGER
  let maxValue = A[0]  // value + index의 최대값
  for (let i = 1; i < ALen; i += 1) {
    const num = A[i]
    maxTotal = Math.max(maxValue + num - i, maxTotal)
    maxValue = Math.max(num + i, maxValue)
  }
  return maxTotal
}


// O(n^2)... 많이 느림 ㅜㅜ. 무려 runtime이 5%. 9초 ㅠㅠ
// Runtime: 9784 ms, faster than 5.26% of JavaScript online submissions for Best Sightseeing Pair.
// Memory Usage: 40.2 MB, less than 100.00% of JavaScript online submissions for Best Sightseeing Pair.
const maxScoreSightseeingPair2 = A => {
  let max = Number.MIN_SAFE_INTEGER
  const ALen = A.length
  let prevNum = 0

  for (let i = 0; i < ALen; i += 1) {
    const num1 = A[i]
    const distanceOfPrevNum = prevNum - num1
    const startIndex = distanceOfPrevNum > 0 ? i + 1 + distanceOfPrevNum : i + 1
    let distance = 0
    prevNum = num1
    
    for (let j = startIndex; j < ALen; j += 1) {
      distance += 1
      const value = num1 + A[j] - distance
      max = Math.max(value, max)
    }
  }

  return max
}
