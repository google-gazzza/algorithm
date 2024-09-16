// [Easy] 997. Find the Town Judge
// 997_find_the_town_judge

// https://leetcode.com/problems/find-the-town-judge
// Runtime: 124 ms, faster than 50.85% of JavaScript online submissions for Find the Town Judge.
// Memory Usage: 47.1 MB, less than 29.03% of JavaScript online submissions for Find the Town Judge.

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (N, trust) {
  const trustLen = trust.length
  if (trustLen === 0) {
    return N > 1 ? -1 : 1
  }
  const trustedPersonMap = new Map()
  const trustSet = new Set()

  for (let i = 0; i < trustLen; i += 1 || 0) {
    const [person, judge] = trust[i]
    trustSet.add(person)
    if (trustedPersonMap.has(judge)) {
      trustedPersonMap.get(judge).push(person)
    } else {
      trustedPersonMap.set(judge, [person])
    }
  }

  const trustArr = [...trustedPersonMap]
  if (trustArr.length === 1 && trustArr[0][1].length === N - 1) {
    return trustArr[0][0]
  }
  trustArr.sort((a, b) => b[1].length - a[1].length)
  let candidate = trustArr[0][0]
  if (trustArr[0][1].length === N - 1 && trustArr[1][1].length < N - 1 && !trustSet.has(candidate)) {
    return trustArr[0][0]
  }
  return -1
}

findJudge(1, []) //?
findJudge(2, [[1, 2]]) //?
findJudge(3, [
  [1, 3],
  [2, 3],
  [3, 1],
]) //?
findJudge(4, [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
]) //?
findJudge(3, [
  [1, 3],
  [2, 3],
]) //?
findJudge(3, [
  [1, 2],
  [2, 3],
]) //?
