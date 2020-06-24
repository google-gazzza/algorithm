/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Runtime: 80 ms, faster than 26.14% of JavaScript online submissions for Running Sum of 1d Array.
//Memory Usage: 41.4 MB, less than 100.00% of JavaScript online submissions for Running Sum of 1d Array.
var runningSum = function(nums) {
  let result = [];
  nums.map((num,i,arr)=>{
    arr = arr.slice(0,i+1);
    result.push(arr.reduce((acc,cur)=> acc+=cur));
  })
  return result;
};
