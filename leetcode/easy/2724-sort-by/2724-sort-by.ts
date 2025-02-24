// leetcode/easy/2724. Sort By
// 2724-sort-by
// URL: https://leetcode.com/problems/sort-by/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

function sortBy(arr: any[], fn: Function): any[] {
  arr.sort((a, b) => {
    if (fn(a) < fn(b)) {
      return -1;
    } else if (fn(a) > fn(b)) {
      return 1;
    } else {
      return 0;
    }
  });

  return arr;
}