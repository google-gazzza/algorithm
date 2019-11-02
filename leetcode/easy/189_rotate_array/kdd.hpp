// https://leetcode.com/problems/rotate-array/
// Runtime: 12 ms, faster than 99.57% of C++ online submissions for Rotate Array.
// Memory Usage: 9.4 MB, less than 100.00% of C++ online submissions for Rotate Array.

class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        std::rotate(nums.rbegin(), nums.rbegin() + k % nums.size(), nums.rend());
    }
};
