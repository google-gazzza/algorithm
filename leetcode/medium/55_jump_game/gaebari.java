//https://leetcode.com/problems/jump-game
//Runtime: 1 ms, faster than 98.48% of Java online submissions for Jump Game.
//Memory Usage: 41.4 MB, less than 35.90% of Java online submissions for Jump Game.

class Solution {
    public boolean canJump(int[] nums) {
        int dis = 0;
        for(int i =0; i <= dis; i++) {
            dis = Math.max(dis, i + nums[i]);
            if ( dis >= nums.length-1 ) return true;
        }
        return false;
    }
}