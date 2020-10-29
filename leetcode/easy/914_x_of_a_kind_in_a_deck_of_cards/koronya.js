// [Easy] 914. X of a Kind in a Deck of Cards
// 914_x_of_a_kind_in_a_deck_of_cards

// https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards
// Runtime: 80 ms, faster than 85.16% of JavaScript online submissions for X of a Kind in a Deck of Cards.
// Memory Usage: 40.3 MB, less than 8.20% of JavaScript online submissions for X of a Kind in a Deck of Cards.
const gcd = arr => {
  const arrLen = arr.length
  let accGcd = arr[0]
  for (let i = 1; i < arrLen; i += 1 | 0) {
    accGcd = gcdWithTwo(accGcd, arr[i])
  }

  return accGcd
}

const gcdWithTwo = (a, b) => {
  if (a === 0) {
    return b
  }
  return gcdWithTwo(b % a, a)
}

const hasGroupsSizeX = function (deck) {
  const numMap = new Map()
  deck.forEach(num => {
    numMap.set(num, (numMap.get(num) || 0) + 1)
  })
  const numMapArr = [...numMap]
  const minCount = numMapArr.reduce((acc, cur) => acc > cur[1] ? cur[1] : acc, Number.MAX_SAFE_INTEGER)
  if (minCount === 1) {
    return false
  }
  const reducedArr = numMapArr.map(item => item[1])
  const gcdOfArr = gcd(reducedArr)

  if (gcdOfArr >= 2) {
    return true
  }
  return false
}
