// [Medium] 950. Reveal Cards In Increasing Order
// 950_reveal_cards_in_increasing_order

// https://leetcode.com/problems/reveal-cards-in-increasing-order
// Runtime: 84 ms, faster than 81.82% of JavaScript online submissions for Reveal Cards In Increasing Order.
// Memory Usage: 40.5 MB, less than 39.39% of JavaScript online submissions for Reveal Cards In Increasing Order.
const deckRevealedIncreasing = function (deck) {
  const deckLen = deck.length
  deck.sort((a, b) => a - b)
  const resultArr = Array.from({ length: deckLen })
  const indexArr = Array.from({ length: Math.floor(deckLen / 2) }).map((_, i) => 2 * i + 1)
  const limit = Math.ceil(deckLen / 2)
  let nextNumberIndex = limit
  for (let i = 0; i < limit; i += 1 || 0) {
    resultArr[2 * i] = deck[i]
  }
  if (deckLen % 2 !== 0) {
    const shiftItem = indexArr.shift()
    indexArr.push(shiftItem)
  }
  while (true) {
    const targetIndex = indexArr.shift()
    resultArr[targetIndex] = deck[nextNumberIndex]
    nextNumberIndex += 1
    if (indexArr.length > 0) {
      const shiftItem = indexArr.shift()
      indexArr.push(shiftItem)
    } else {
      break
    }
  }

  return resultArr
}
