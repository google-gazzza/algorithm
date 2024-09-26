// [Easy] 1086. High Five
// 1086_high_five

// https://leetcode.com/problems/high-five
// Runtime: 118 ms, faster than 9.52% of TypeScript online submissions for High Five.
// Memory Usage: 41.3 MB, less than 80.95% of TypeScript online submissions for High Five.

function highFive(items: number[][]): number[][] {
  const itemMap = new Map<number, number[]>()
  items.forEach((item) => {
    const [id, score] = item
    if (itemMap.has(id)) {
      itemMap.get(id)!.push(score)
    } else {
      itemMap.set(id, [score])
    }
  })

  const resultArr: number[][] = []
  ;[...itemMap].forEach((item) => {
    const [id, scores] = item
    const sortedScores: number[] = scores.sort((a, b) => b - a).slice(0, 5)
    const sortedScoresLen: number = sortedScores.length
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
