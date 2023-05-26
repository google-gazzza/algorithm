/*
933-number-of-recent-calls
leetcode/easy/933. Number of Recent Calls
Difficulty: easy
URL: https://leetcode.com/problems/number-of-recent-calls/
*/

class RecentCounter {
    private requestTimeStamp: any[];
  
    constructor() {
      this.requestTimeStamp = [];
    }
  
    ping(t: number): number {
      this.requestTimeStamp.push(t);
  
      while (this.requestTimeStamp[0] < t - 3000) {
        this.requestTimeStamp.shift();
      }
  
      return this.requestTimeStamp.length;
    }
  }
  