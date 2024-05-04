// 1272-remove-interval
// URL: https://leetcode.com/problems/remove-interval/description/?envType=study-plan-v2&envId=premium-algo-100


function removeInterval(intervals: number[][], toBeRemoved: number[]): number[][] {
    const result: number[][] = [];
  
    for (let i = 0; i < intervals.length; i+=1) {
      if (intervals[i][1] <= toBeRemoved[0] || toBeRemoved[1] <= intervals[i][0]) {
        result.push(intervals[i]);
        continue;
      }
  
      if (intervals[i][0] < toBeRemoved[0]) {
        result.push([intervals[i][0], toBeRemoved[0]]);
      }
  
      if (toBeRemoved[1] < intervals[i][1]) {
        result.push([toBeRemoved[1], intervals[i][1]]);
      }
    }
  
    return result;
  };
  