// https://leetcode.com/problems/number-of-recent-calls
// Runtime: 304 ms, faster than 30.91% of JavaScript online submissions for Number of Recent Calls.
// Memory Usage: 56.8 MB, less than 100.00% of JavaScript online submissions for Number of Recent Calls.
var RecentCounter = function() {
  this.pingArr = []
}

RecentCounter.prototype.ping = function(t) {
  this.pingArr.push(t)
  const pingArrLen = this.pingArr.length
  let count = 0
  const target = t - 3000 > 0 ? t - 3000 : 0
  for (let i = pingArrLen - 1; i >= 0; i = i - 1 | 0) {
    if (this.pingArr[i] >= target && this.pingArr[i] <= t) {
      count += 1
    } else {
      break
    }
  }
  return count
}
