// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Find Minimum in Rotated Sorted Array.
// Memory Usage: 8.8 MB, less than 64.44% of C++ online submissions for Find Minimum in Rotated Sorted Array.

class Solution {
private:
    template <class Nums>
    int binarySearch(Nums&& nums, std::size_t lo, std::size_t hi) {
        if (lo >= hi) return nums[lo];
        auto mid = (lo + hi) / 2;
        if (nums[mid] < nums[hi]) return binarySearch(nums, lo, mid);
        else return binarySearch(nums, mid + 1, hi);
    }
    
public:
    int findMin(vector<int>& nums) {
        return binarySearch(nums, 0, nums.size() - 1);
    }
};