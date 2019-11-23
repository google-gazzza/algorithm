// https://leetcode.com/problems/maximum-subarray/
// Runtime: 4 ms, faster than 98.49% of C++ online submissions for Maximum Subarray.
// Memory Usage: 9.3 MB, less than 69.61% of C++ online submissions for Maximum Subarray.

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        auto partial = 0;
        auto max = std::numeric_limits<int32_t>::min();
        for (auto num : nums) {
            partial = std::max(0, partial) + num;
            max = std::max(partial, max);
        }
        
        return max;
    }
};