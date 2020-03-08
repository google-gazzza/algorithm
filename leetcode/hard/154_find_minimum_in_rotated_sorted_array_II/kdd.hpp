// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
// Runtime: 8 ms, faster than 60.73% of C++ online submissions for Find Minimum in Rotated Sorted Array II.
// Memory Usage: 8.9 MB, less than 50.00% of C++ online submissions for Find Minimum in Rotated Sorted Array II.

class Solution {
private:
    template <class Nums>
    int binarySearch(Nums&& nums, std::size_t lo, std::size_t hi) {
        if (lo >= hi) return nums[lo];
        auto mid = (lo + hi) / 2;
        if (nums[mid] < nums[hi]) return binarySearch(nums, lo, mid);
        else if (nums[mid] > nums[hi]) return binarySearch(nums, mid + 1, hi);
        else {
            while (nums[mid] == nums[hi] && mid < hi) 
                --hi;
            if (mid == hi) return binarySearch(nums, lo, mid);
            else return binarySearch(nums, mid, hi);
        }
    }
    
public:
    int findMin(vector<int>& nums) {
        return binarySearch(nums, 0, nums.size() - 1);
    }
};