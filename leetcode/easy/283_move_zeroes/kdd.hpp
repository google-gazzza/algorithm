// https://leetcode.com/problems/move-zeroes/
// Runtime: 12 ms, faster than 97.07% of C++ online submissions for Move Zeroes.
// Memory Usage: 9.5 MB, less than 73.61% of C++ online submissions for Move Zeroes.

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        auto nonZeroIdx = 0;
        for (auto i = 0; i < nums.size(); ++i) {
            if (nums[i] != 0) nums[nonZeroIdx++] = nums[i];
        }
        for (auto i = nonZeroIdx; i < nums.size(); ++i)
            nums[i] = 0;
    }
};