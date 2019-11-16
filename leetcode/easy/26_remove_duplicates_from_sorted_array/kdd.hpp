// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Runtime: 20 ms, faster than 93.60% of C++ online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 9.9 MB, less than 87.50% of C++ online submissions for Remove Duplicates from Sorted Array.

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        nums.erase(std::unique(nums.begin(), nums.end()), nums.end());
        return nums.size();
    }
};
