// [Medium] 1472. Design Browser History
// 1472_design_browser_history

// https://leetcode.com/problems/design-browser-history
// Runtime: 204 ms, faster than 60.46% of JavaScript online submissions for Design Browser History.
// Memory Usage: 49.8 MB, less than 14.83% of JavaScript online submissions for Design Browser History.
const BrowserHistory = function (homepage) {
  this.history = [homepage]
  this.candidates = []
}

BrowserHistory.prototype.visit = function (url) {
  this.history.push(url)
  this.candidates.length = 0
}

BrowserHistory.prototype.back = function (steps) {
  const historyLength = this.history.length
  const spliceIndex = steps >= historyLength ? 1 : historyLength - steps
  const forwardCandidates = this.history.splice(spliceIndex)
  this.candidates = [...forwardCandidates, ...this.candidates]

  return this.history[this.history.length - 1]
}

BrowserHistory.prototype.forward = function (steps) {
  const backCandidates = this.candidates.splice(0, steps)
  this.history = [...this.history, ...backCandidates]

  return this.history[this.history.length - 1]
}
