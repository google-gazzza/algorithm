// [Easy] 359. Logger Rate Limiter
// 359_logger_rate_limiter

// https://leetcode.com/problems/logger-rate-limiter
// Runtime: 144 ms, faster than 100.00% of TypeScript online submissions for Logger Rate Limiter.
// Memory Usage: 49.5 MB, less than 56.92% of TypeScript online submissions for Logger Rate Limiter.

class Logger {
  messageMap: Map<string, number>
  constructor() {
    this.messageMap = new Map<string, number>()
  }

  shouldPrintMessage(timestamp: number, message: string): boolean {
    if (this.messageMap.has(message) === false || this.messageMap.get(message)! <= timestamp - 10) {
      this.messageMap.set(message, timestamp)
      return true
    }
    return false
  }
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
