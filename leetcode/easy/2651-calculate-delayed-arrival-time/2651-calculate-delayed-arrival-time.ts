/*
# leetcode/easy/2651. Calculate Delayed Arrival Time
# 2651-calculate-delayed-arrival-time
# URL: https://leetcode.com/problems/calculate-delayed-arrival-time/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function findDelayedArrivalTime(arrivalTime: number, delayedTime: number): number {
  return (arrivalTime + delayedTime) % 24;
}

let arrivalTime = 15;
let delayedTime = 5;
console.log(findDelayedArrivalTime(arrivalTime, delayedTime));
// Output: 20

arrivalTime = 13;
delayedTime = 11;
console.log(findDelayedArrivalTime(arrivalTime, delayedTime));
// Output: 0
