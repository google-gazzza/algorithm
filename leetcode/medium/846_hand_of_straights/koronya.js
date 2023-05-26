// [Medium] 846. Hand of Straights
// 846_hand_of_straights

// https://leetcode.com/problems/hand-of-straights
// Runtime: 148 ms, faster than 61.29% of JavaScript online submissions for Hand of Straights.
// Memory Usage: 45.7 MB, less than 91.94% of JavaScript online submissions for Hand of Straights.

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
const isNStraightHand = function (hand, groupSize) {
  const handLen = hand.length
  if (handLen % groupSize !== 0) {
    return false
  }

  hand.sort((a, b) => a - b)

  let targetArr = []
  while (true) {
    if (hand.length === 0) {
      return true
    }
    if (targetArr.length === groupSize) {
      targetArr = []
    }
    if (targetArr.length === 0) {
      const num = hand.splice(0, 1)
      targetArr.push(...num)
    } else {
      const prevNum = targetArr[targetArr.length - 1]
      const tempHandLen = hand.length
      let isValid = false
      for (let i = 0; i < tempHandLen; i += 1 || 0) {
        const num = hand[i]
        if (prevNum + 1 === num) {
          const extractNum = hand.splice(i, 1)
          targetArr.push(...extractNum)
          isValid = true
          break
        }
      }
      if (isValid === false) {
        return false
      }
    }
  }
}

// isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3) //?
// isNStraightHand([1, 2, 3, 4, 5], 4) //?
isNStraightHand([5, 1], 1) //?
