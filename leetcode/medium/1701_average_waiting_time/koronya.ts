// [Medium] 1701. Average Waiting Time
// 1701_average_waiting_time

// https://leetcode.com/problems/average-waiting-time
// Runtime: 164 ms, faster than 100.00% of TypeScript online submissions for Average Waiting Time.
// Memory Usage: 62.6 MB, less than 77.78% of TypeScript online submissions for Average Waiting Time.

/**
 * @param {number[][]} customers
 * @return {number}
 */
function averageWaitingTime(customers: number[][]): number {
  const customersLen: number = customers.length
  let before: number = customers[0][0]
  const preparedTimes: number[] = customers.map((customer, index) => {
    const result: number = before >= customer[0] ? before + customer[1] : customer[0] + customer[1]
    before = result
    return result
  })

  const total: number = preparedTimes.map((item, index) => item - customers[index][0]).reduce((acc, cur) => acc + cur, 0)
  return total / customersLen
}

averageWaitingTime([
  [1, 2],
  [2, 5],
  [4, 3],
]) //?

averageWaitingTime([
  [5, 2],
  [5, 4],
  [10, 3],
  [20, 1],
]) //?
