// https://leetcode.com/problems/merge-sorted-array/
// Runtime: 4 ms, faster than 86.59% of C++ online submissions for Merge Sorted Array.
// Memory Usage: 8.6 MB, less than 93.48% of C++ online submissions for Merge Sorted Array.

public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        auto i = m - 1;
        auto j = n - 1;
        auto k = m + n - 1;    
        while(i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
            else nums1[k--] = nums2[j--];
        };
    
        while(j >= 0) nums1[k--] = nums2[j--];
    }
};