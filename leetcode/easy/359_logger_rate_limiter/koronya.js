// [Easy] 359. Logger Rate Limiter
// 359_logger_rate_limiter

// https://leetcode.com/problems/logger-rate-limiter
// Runtime: 220 ms, faster than 23.90% of JavaScript online submissions for Logger Rate Limiter.
// Memory Usage: 50.8 MB, less than 8.64% of JavaScript online submissions for Logger Rate Limiter.

const Logger = function () {
  this.messageMap = new Map()
}

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (this.messageMap.has(message) === false || this.messageMap.get(message) <= timestamp - 10) {
    this.messageMap.set(message, timestamp)
    return true
  }
  return false
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

const logger = new Logger()
logger.shouldPrintMessage(1, 'foo') //?
logger.shouldPrintMessage(2, 'bar') //?
logger.shouldPrintMessage(3, 'foo') //?
logger.shouldPrintMessage(8, 'bar') //?
logger.shouldPrintMessage(10, 'foo') //?
logger.shouldPrintMessage(11, 'foo') //?
