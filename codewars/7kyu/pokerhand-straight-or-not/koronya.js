// [JS][7kyu] Pokerhand, straight or not?
// pokerhand-straight-or-not
// https://www.codewars.com/kata/582afcadac2d9baa0900054c/train/javascript// return true/false if the given cards make up a straight

const isStraight = (cards) => {
  const uniqueCards = [...new Set(cards)]
  const uniqueCardsLen = uniqueCards.length
  uniqueCards.sort((a, b) => a - b)
  for (let i = 0; i <= uniqueCardsLen - 5; i += 1 || 0) {
    if (uniqueCards[i] + uniqueCards[i + 1] + uniqueCards[i + 2] + uniqueCards[i + 3] + uniqueCards[i + 4] === 5 * uniqueCards[i + 2]) {
      return true
    }
  }
  if (uniqueCards[uniqueCardsLen - 1] === 14) {
    uniqueCards.unshift(1)
    uniqueCards.pop()
    for (let i = 0; i <= uniqueCardsLen - 5; i += 1 || 0) {
      if (uniqueCards[i] + uniqueCards[i + 1] + uniqueCards[i + 2] + uniqueCards[i + 3] + uniqueCards[i + 4] === 5 * uniqueCards[i + 2]) {
        return true
      }
    }
  }

  return false
}

isStraight([9, 10, 11, 12, 13])
isStraight([14, 2, 3, 4, 5])
isStraight([2, 7, 8, 5, 10, 9, 11])

isStraight([1, 2, 2, 3, 4, 5, 14])

isStraight([7, 8, 12, 13, 14])
