// [Medium] 950. Reveal Cards In Increasing Order
// 950_reveal_cards_in_increasing_order

// https://leetcode.com/problems/reveal-cards-in-increasing-order
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Reveal Cards In Increasing Order.
// Memory Usage: 41.1 MB, less than 50.00% of TypeScript online submissions for Reveal Cards In Increasing Order.
function deckRevealedIncreasing(deck: number[]): number[] {
  const deckLen: number = deck.length
  deck.sort((a: number, b: number): number => a - b)
  const resultArr: number[] = Array.from({ length: deckLen })
  const indexArr: number[] = Array.from({ length: Math.floor(deckLen / 2) }).map((_, i) => 2 * i + 1)
  const limit: number = Math.ceil(deckLen / 2)
  let nextNumberIndex: number = limit
  for (let i: number = 0; i < limit; i += 1) {
    resultArr[2 * i] = deck[i]
  }
  if (deckLen % 2 !== 0) {
    const shiftItem: number = indexArr.shift()!
    indexArr.push(shiftItem)
  }
  while (true) {
    const targetIndex: number = indexArr.shift()!
    resultArr[targetIndex] = deck[nextNumberIndex]
    nextNumberIndex += 1
    if (indexArr.length > 0) {
      const shiftItem: number = indexArr.shift()!
      indexArr.push(shiftItem)
    } else {
      break
    }
  }

  return resultArr
}
