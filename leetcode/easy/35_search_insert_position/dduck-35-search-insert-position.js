/*
35-search-insert-position

# leetcode/easy/35. Search Insert Position
difficulty: easy
URL: https://leetcode.com/problems/search-insert-position/
tags: recursion, binary-search

## Approach

### en
1.compare first element with target,
  if target is (less than or equal nums[0]) or nums empty array return 0
2.compare last element with target,
  if target is greater than nums last element then return nums length
3.use binary searching to get index it will guarantee O(n log n)

### kr
1.첫번째 엘레먼트와 타겟을 비교합니다.
  만약 타겟이 첫번째 엘레먼트와 같거나 작을경우, 또는 nums가 빈 어레이 일경우 0을 리턴합니다.
2.마지막 엘레먼트와 타겟을 비교합니다.
  만약 타겟이 마지막 엘레먼트보다 클 경우 nums의 길이를 반환합니다.
3.바이너리 서치로 삽입할 인덱스를 검색합니다. 이것은 O(n log n)을 보장 해 줍니다.

## solution

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const binarySearch = (nums, target, begin = 0, end = nums.length - 1) => {
  const middleIndex = Math.floor((begin + end) / 2);
  
  if (nums[middleIndex] === target) {
    return middleIndex;
  }
  if (nums[middleIndex] < target && target <= nums[middleIndex + 1]) {
    return middleIndex + 1;
  }
  if (nums[middleIndex] < target) {
    return binarySearch(nums, target, middleIndex, end);
  }
  
  return binarySearch(nums, target, begin, middleIndex);
};

const searchInsert = function (nums, target) {
  if (target <= nums[0] || nums.length === 0) {
    return 0;
  }
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  
  return binarySearch(nums, target);
};

// test
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1], 1));
console.log(searchInsert([1, 3], 3));
