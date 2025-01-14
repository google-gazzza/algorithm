// [JS][7kyu] Help your fellow warrior!
// help-your-fellow-warrior
// https://www.codewars.com/kata/5660aa6fa60f03856c000045/train/javascript

const getHonorPath = (honorScore, targetHonorScore) => {
  if (honorScore >= targetHonorScore) {
    return {}
  }

  const diff = targetHonorScore - honorScore
  const maxOneKyus = Math.floor(diff / 2)
  const candidateList = []
  for (let i = maxOneKyus; i >= 0; i--) {
    const multiplyOne = i * 2
    const twoCount = diff - multiplyOne
    candidateList.push({ oneCount: i, twoCount, totalCount: i + twoCount })
  }

  const result = candidateList.sort((a, b) => a.totalCount - b.totalCount)[0]
  return {
    '1kyus': result.oneCount,
    '2kyus': result.twoCount,
  }
}

getHonorPath(2, 11)
getHonorPath(11, 2)
