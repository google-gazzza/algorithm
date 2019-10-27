// https://leetcode.com/problems/median-of-two-sorted-arrays/
// Runtime: 16 ms, faster than 90.73% of C++ online submissions for Median of Two Sorted Arrays.
// Memory Usage: 9.9 MB, less than 47.42% of C++ online submissions for Median of Two Sorted Arrays.

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        std::vector<int> merged;
        merged.resize(nums1.size() + nums2.size());       
        auto i = 0, j = 0, k = 0;
        while (i < nums1.size() && j < nums2.size()) 
            merged[k++] = (nums1[i] < nums2[j]) ? nums1[i++] : nums2[j++];
        while (i < nums1.size()) merged[k++] = nums1[i++];
        while (j < nums2.size()) merged[k++] = nums2[j++];
        
        double result = (k % 2 == 0) ? static_cast<double>((merged[k / 2 - 1] + merged[k / 2])) / 2 : static_cast<double>(merged[k / 2]);
        return result;
    }
};
