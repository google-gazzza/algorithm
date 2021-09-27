// https://leetcode.com/problems/sort-an-array/
// Runtime: 88 ms, faster than 28.28% of C++ online submissions for Sort an Array.
// Memory Usage: 12.4 MB, less than 100.00% of C++ online submissions for Sort an Array.

class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        std::sort(nums.begin(), nums.end());
        return nums;
    }
};