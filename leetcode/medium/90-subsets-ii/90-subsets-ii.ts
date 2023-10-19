// leetcode/medium/90. Subsets II
// 90-subsets-ii
// URL: https://leetcode.com/problems/subsets-ii/description/

function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = [[]];
  const set = new Set<string>();

  set.add('');

  nums.forEach((num) => {
    const newSubsets: number[][] = [];

    result.forEach((item) => {
      const subsetCandiate = [...item, num].sort((a, b) => a - b);

      if (!set.has(subsetCandiate.join(''))) {
        newSubsets.push(subsetCandiate);
        set.add(subsetCandiate.join(''));
      }
    });

    result.push(...newSubsets);
  });

  return result;
}

console.log(subsetsWithDup([1, 2, 2]));

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

console.log(subsetsWithDup([0]));
// Output: [[],[0]]
