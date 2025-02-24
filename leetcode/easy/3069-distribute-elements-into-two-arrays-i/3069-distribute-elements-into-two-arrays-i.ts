// 3069-distribute-elements-into-two-arrays-i
// URL: https://leetcode.com/problems/distribute-elements-into-two-arrays-i/description/

function resultArray(nums: number[]): number[] {
    const arr1 = [];
    const arr2 = [];
  
    arr1.push(nums.shift());
    arr2.push(nums.shift());
  
    while (nums.length) {
      if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
        arr1.push(nums.shift());
      } else {
        arr2.push(nums.shift());
      }
    }
  
    return arr1.concat(arr2);
  };
  