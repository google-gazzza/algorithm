/*
1710-maximum-units-on-a-truck
leetcode/easy/1710. Maximum Units on a Truck
Difficulty: easy
URL: https://leetcode.com/problems/maximum-units-on-a-truck/
*/


function maximumUnits(boxTypes: number[][], truckSize: number): number {
    boxTypes.sort((a, b) => b[1] - a[1]);
  
    let total = 0;
  
    while (truckSize > 0) {
      if (boxTypes.length === 0) {
        break;
      }
  
      if (boxTypes[0][0] === 0) {
        boxTypes.shift();
      } else {
        const min = Math.min(truckSize, boxTypes[0][0]);
        total += min * boxTypes[0][1];
        truckSize -= min;
        boxTypes[0][0] -= min;
      }
    }
  
    return total;
  }
  
  
  let boxTypes = [[1, 3], [2, 2], [3, 1]];
  let truckSize = 4;
  // Output: 8
  console.log(maximumUnits(boxTypes, truckSize));
  
  boxTypes = [[5, 10], [2, 5], [4, 7], [3, 9]];
  truckSize = 10;
  // Output: 91
  console.log(maximumUnits(boxTypes, truckSize));
  
  