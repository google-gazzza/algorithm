// [Easy] 2073. Time Needed to Buy Tickets
// 2073_time_needed_to_buy_tickets

// https://leetcode.com/problems/time-needed-to-buy-tickets
// Runtime: 76 ms, faster than 65.76% of JavaScript online submissions for Time Needed to Buy Tickets.
// Memory Usage: 39.2 MB, less than 26.85% of JavaScript online submissions for Time Needed to Buy Tickets.

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
const timeRequiredToBuy = function (tickets, k) {
  let result = 0
  const ticketsLen = tickets.length
  while (true) {
    for (let i = 0; i < ticketsLen; i += 1 || 0) {
      if (tickets[k] === 0) {
        return result
      } else if (tickets[i] > 0) {
        tickets[i] -= 1
        result += 1
      }
    }
  }

  return result
}

timeRequiredToBuy([2, 3, 2], 2) //?
timeRequiredToBuy([5, 1, 1, 1], 0) //?
