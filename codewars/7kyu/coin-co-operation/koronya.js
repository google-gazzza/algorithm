// [JS][7kyu] Coin Co-Operation
// coin-co-operation
// https://www.codewars.com/kata/64fc00392b610b1901ff0f17/train/javascript

const getCoinBalances = (lst1, lst2) => {
  let score1 = 3
  let score2 = 3
  lst1.forEach((item1, index) => {
    const item2 = lst2[index]
    if (item1 === 'share') {
      score1 -= 1
      score2 += 3
    }
    if (item2 === 'share') {
      score1 += 3
      score2 -= 1
    }
  })
  return [score1, score2]
}

getCoinBalances(['share'], ['share'])
getCoinBalances(['steal'], ['share'])
getCoinBalances(['steal'], ['steal'])
getCoinBalances(['share', 'share', 'share'], ['steal', 'share', 'steal'])
