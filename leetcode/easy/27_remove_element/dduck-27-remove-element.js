/*

27-remove-element

# leetcode/easy/27. Remove Element
difficulty: easy
URL: https://leetcode.com/problems/remove-element
tags: splice

## Approach

### en
1.iterate as much as nums.length
2.while iterate if nums[i] equal to target that we are trying to eliminate,
then eliminate through 'splice' and decrease i-=1;
cause if we eliminate nums[2], then nums[3] will become nums[2],
and if we do not decrease index(i), we will not be able to check new nums[2]

### kr
1.nums.length만큼 이터레이션 합니다.
2.이터레이션하는동안 만약 nums[i]가 우리가 제거하려는 값이라면 'splice'를 통해 제거하고 i-=1;을 통해 인덱스를 감소시킵니다.
왜냐하면 만약 우리가 nums[2]를 제거 했다면 nums[3]는 nums[2]가 될것이고
만약 index(i)를 감소시키지 않는다면 새로운 nums[2]를 체크 할 수 없기 때문입니다.

## solution

*/

const removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
};
