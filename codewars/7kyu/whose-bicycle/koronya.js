// [JS][7kyu] Whose bicycle?
// whose-bicycle
// https://www.codewars.com/kata/5a2cb4bff28b820c33000082/train/javascript

const getScore = (obj) => Object.values(obj).reduce((acc, curr) => acc + curr, 0)
const whoseBicycle = (diary1, diary2, diary3) => {
  const score1 = getScore(diary1)
  const score2 = getScore(diary2)
  const score3 = getScore(diary3)

  const max = Math.max(score1, score2, score3)
  if (score3 === max) {
    return 'I need to buy a bicycle for my third son.'
  }
  if (score2 === max) {
    return 'I need to buy a bicycle for my second son.'
  }
  return 'I need to buy a bicycle for my first son.'
}

whoseBicycle(
  {
    algebra: 6,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
  },
  {
    algebra: 8,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
  },
  {
    algebra: 6,
    history: 5,
    physics: 5,
    geography: 9,
    chemistry: 10,
  },
)
