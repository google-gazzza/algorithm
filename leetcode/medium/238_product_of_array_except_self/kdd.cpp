// https://leetcode.com/problems/product-of-array-except-self/
// Runtime: 40 ms, faster than 75.01% of C++ online submissions for Product of Array Except Self.
// Memory Usage: 10.4 MB, less than 100.00% of C++ online submissions for Product of Array Except Self.

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        std::vector<int> left(nums.size(), 1);
        std::vector<int> right(nums.size(), 1);
        std::transform(nums.begin(), nums.end() - 1, left.begin(), left.begin() + 1, 
                      [](auto&& nums, auto&& left) {
                          return nums * left;
                      });
        std::transform(nums.rbegin(), nums.rend() - 1, right.rbegin(), right.rbegin() + 1,
                      [](auto&& nums, auto&& right) {
                          return nums * right;
                      });
        std::transform(left.begin(), left.end(), right.begin(), right.begin(),
                      [](auto&& left, auto&& right) {
                          return left * right;
                     });
        return right;
    }
};