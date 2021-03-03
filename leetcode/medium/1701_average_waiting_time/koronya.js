// [Medium] 1701. Average Waiting Time
// 1701_average_waiting_time

// https://leetcode.com/problems/average-waiting-time
// Runtime: 156 ms, faster than 81.62% of JavaScript online submissions for Average Waiting Time.
// Memory Usage: 63.5 MB, less than 36.32% of JavaScript online submissions for Average Waiting Time.

/**
 * @param {number[][]} customers
 * @return {number}
 */
const averageWaitingTime = function (customers) {
  const customersLen = customers.length
  let before = customers[0][0]
  const preparedTimes = customers.map((customer, index) => {
    const result = before >= customer[0] ? before + customer[1] : customer[0] + customer[1]
    before = result
    return result
  })

  const total = preparedTimes.map((item, index) => item - customers[index][0]).reduce((acc, cur) => acc + cur, 0)
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
