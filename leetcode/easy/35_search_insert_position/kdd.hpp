// https://leetcode.com/problems/search-insert-position/
// Runtime: 4 ms, faster than 98.15% of C++ online submissions for Search Insert Position.
// Memory Usage: 8.7 MB, less than 100.00% of C++ online submissions for Search Insert Position.
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        return std::distance(nums.cbegin(), std::lower_bound(nums.cbegin(), nums.cend(), target));
    }
};