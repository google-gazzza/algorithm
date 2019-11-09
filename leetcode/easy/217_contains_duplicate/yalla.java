// https://leetcode.com/problems/contains-duplicate/submissions/
// Runtime: 5 ms, faster than 96.59% of Java online submissions for Contains Duplicate.
// Memory Usage: 41.7 MB, less than 98.28% of Java online submissions for Contains Duplicate.
class Solution {
  public boolean containsDuplicate(int[] nums) {
    Arrays.sort(nums);
    for( int i=0; i < nums.length -1; ++i){
      if(nums[i] == nums [i+1]){
        return true;
      }
    }
    return false;
  }
}