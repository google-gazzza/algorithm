// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Runtime: 8 ms, faster than 85.74% of C++ online submissions for Find First and Last Position of Element in Sorted Array.
// Memory Usage: 10.3 MB, less than 82.42% of C++ online submissions for Find First and Last Position of Element in Sorted Array.
 
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        if (std::find(nums.begin(), nums.end(), target) == nums.end()) return std::vector<int>{-1, -1};
        return std::vector<int>{std::distance(nums.begin(), std::find(nums.begin(), nums.end(), target)), std::distance(nums.begin(), std::find(nums.rbegin(), nums.rend(), target).base()) - 1};
    }
};