// https://leetcode.com/problems/missing-number/
// Runtime: 24 ms, faster than 80.74% of C++ online submissions for Missing Number.
// Memory Usage: 9.8 MB, less than 98.04% of C++ online submissions for Missing Number.

class Solution {
public:
    int missingNumber(vector<int>& nums) {
        auto n = nums.size(); 
        auto sum = std::accumulate(nums.cbegin(), nums.cend(), 0);
        return (n * (n + 1)) / 2 - sum;
    }
};
