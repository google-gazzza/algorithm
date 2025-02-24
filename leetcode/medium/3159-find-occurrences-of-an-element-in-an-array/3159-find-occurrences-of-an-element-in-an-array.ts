// 3159-find-occurrences-of-an-element-in-an-array
// URL: https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/description/


function occurrencesOfElement(nums: number[], queries: number[], x: number): number[] {
    const indexes = nums.map((num, index) => num === x ? index : -1)
      .filter(index => index !== -1);
  
    const result = [];
  
    for (let i = 0; i < queries.length; i++) {
      if (queries[i] <= indexes.length) {
        result.push(indexes[queries[i] - 1]);
      } else {
        result.push(-1);
      }
    }
  
    return result;
  };
  
  // Input: nums = [1,3,1,7], queries = [1,3,2,4], x = 1
  // Output: [0,-1,2,-1]
  