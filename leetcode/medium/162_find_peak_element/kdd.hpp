// https://leetcode.com/problems/find-peak-element/
// Runtime: 4 ms, faster than 96.83% of C++ online submissions for Find Peak Element.
// Memory Usage: 8.6 MB, less than 81.82% of C++ online submissions for Find Peak Element.

class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int lo = 0, hi = nums.size() - 1;
        while (lo < hi) {
            auto mid = (lo + hi) / 2;
            if (nums[mid] < nums[mid + 1])
                lo = mid + 1;
            else
                hi = mid;
        };
        return lo;
    }
};