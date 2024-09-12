// [Easy] 914. X of a Kind in a Deck of Cards
// 914_x_of_a_kind_in_a_deck_of_cards

// https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards
// Runtime: 92 ms, faster than 45.45% of TypeScript online submissions for X of a Kind in a Deck of Cards.
// Memory Usage: 40.4 MB, less than 9.09% of TypeScript online submissions for X of a Kind in a Deck of Cards.
const gcd = (arr: number[]): number => {
  const arrLen: number = arr.length
  let accGcd: number = arr[0]
  for (let i: number = 1; i < arrLen; i += 1) {
    accGcd = gcdWithTwo(accGcd, arr[i])
  }

  return accGcd
}

const gcdWithTwo = (a: number, b: number): number => {
  if (a === 0) {
    return b
  }

  return gcdWithTwo(b % a, a)
}

const hasGroupsSizeX = function (deck: number[]): boolean {
  const numMap = new Map<number, number>()
  deck.forEach(num => {
    numMap.set(num, (numMap.get(num) || 0) + 1)
  })
  const numMapArr: number[][] = [...numMap]
  const minCount: number = numMapArr.reduce((acc, cur) => acc > cur[1] ? cur[1] : acc, Number.MAX_SAFE_INTEGER)
  if (minCount === 1) {
    return false
  }
  const reducedArr: number[] = numMapArr.map(item => item[1])
  const gcdOfArr: number = gcd(reducedArr)

  if (gcdOfArr >= 2) {
    return true
  }
  return false
}
