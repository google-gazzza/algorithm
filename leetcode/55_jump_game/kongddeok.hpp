// https://leetcode.com/problems/jump-game/
// Runtime: 8 ms, faster than 96.98% of C++ online submissions for Jump Game.
// Memory Usage: 9.8 MB, less than 100.00% of C++ online submissions for Jump Game.

class Solution {
public:
    bool canJump(vector<int>& nums) {
        auto prevPos = nums[nums.size() - 1];
        for (int i = nums.size() - 1; i >= 0; --i) {
            if (i + nums[i] >= prevPos) prevPos = i;
        }
        if (prevPos == 0) return true;
        else return false;
    }
};
