/**
 https://leetcode.com/problems/number-of-arithmetic-triplets/
 runtime:16ms
 memory: 40.14mb
 */
class Solution {
    public int arithmeticTriplets(int[] nums, int diff) {
        int answer = 0;
        int len = nums.length;
        for(int i = 0; i < len; i++) {
            for(int j = i + 1; j < len; j++) {
                for(int k = j + 1; k < len; k++) {
                    if(nums[j] - nums[i] == diff && nums[k] - nums[j] == diff) {
                        answer++;
                    }
                }
            }
        }

        return answer;
    }
}