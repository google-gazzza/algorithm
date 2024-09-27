/*
design-a-rate-limiting-system
leetcode/system-design/Design a Rate Limiting System
URL: https://leetcode.com/explore/learn/card/system-design/689/system-design-basics/4408/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

class RateLimiter {
  private rateLimit: number;
  private windowSize: number;
  private requestHistory: number[];

  constructor(n: number, t: number) {
    this.rateLimit = n;
    this.windowSize = t;
    this.requestHistory = [];
  }

  isWindowOpen(timestamp: number): boolean {
    const targetTime = timestamp - this.windowSize;

    for (let i = 0; i < this.requestHistory.length; i += 1) {
      if (this.requestHistory[i] < targetTime) {
        this.requestHistory.shift();
      } else {
        break;
      }
    }

    return this.requestHistory.length < this.rateLimit;
  }

  shouldAllow(timestamp: number): boolean {
    if (this.isWindowOpen(timestamp)) {
      this.requestHistory.push(timestamp);
      return true;
    }

    return false;
  }
}

const rateLimiter: RateLimiter = new RateLimiter(3, 5);
rateLimiter.shouldAllow(1); // returns True
                            // There are no previous requests, so this request is allowed.
rateLimiter.shouldAllow(1); // returns True
                            // We can allow 3 requests every 5 seconds, so this request is allowed.
                            // Timestamps of allowed requests are [1,1].
rateLimiter.shouldAllow(2); // returns True
                            // Timestamps of allowed requests are [1,1,2].
rateLimiter.shouldAllow(3); // returns False
                            // This request is not allowed because
                            // the time range [1,3] already has 3 allowed requests.
rateLimiter.shouldAllow(8); // returns True
                            // This request is allowed because
                            // the time range [4,8] does not have any allowed requests.
