// [Easy] 2073. Time Needed to Buy Tickets
// 2073_time_needed_to_buy_tickets

// https://leetcode.com/problems/time-needed-to-buy-tickets
// Runtime: 96 ms, faster than 25.00% of TypeScript online submissions for Time Needed to Buy Tickets.
// Memory Usage: 39.7 MB, less than 95.00% of TypeScript online submissions for Time Needed to Buy Tickets.

function timeRequiredToBuy(tickets: number[], k: number): number {
  let result: number = 0
  const ticketsLen = tickets.length
  while (true) {
    for (let i: number = 0; i < ticketsLen; i += 1) {
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
