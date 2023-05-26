// [Easy] 1086. High Five
// 1086_high_five

// https://leetcode.com/problems/high-five
// Runtime: 80 ms, faster than 81.64% of JavaScript online submissions for High Five.
// Memory Usage: 40.8 MB, less than 76.39% of JavaScript online submissions for High Five.

/**
 * @param {number[][]} items
 * @return {number[][]}
 */
const highFive = function (items) {
  const itemMap = new Map()
  items.forEach((item) => {
    const [id, score] = item
    if (itemMap.has(id)) {
      itemMap.get(id).push(score)
    } else {
      itemMap.set(id, [score])
    }
  })

  const resultArr = []
  ;[...itemMap].forEach((item) => {
    const [id, scores] = item
    const sortedScores = scores.sort((a, b) => b - a).slice(0, 5)
    const sortedScoresLen = sortedScores.length
    let avg = Math.floor(sortedScores.reduce((acc, cur) => acc + cur, 0) / sortedScoresLen)
    resultArr.push([id, avg])
  })
  resultArr.sort((a, b) => a[0] - b[0])
  return resultArr
}

highFive([
  [1, 91],
  [1, 92],
  [2, 93],
  [2, 97],
  [1, 60],
  [2, 77],
  [1, 65],
  [1, 87],
  [1, 100],
  [2, 100],
  [2, 76],
]) //?

highFive([
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
]) //?
