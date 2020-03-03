// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// Runtime: 112 ms, faster than 90.62% of C++ online submissions for Find All Numbers Disappeared in an Array.
// Memory Usage: 15 MB, less than 66.67% of C++ online submissions for Find All Numbers Disappeared in an Array.

class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        for (auto i = 0; i < nums.size(); ++i) {
            auto val = nums[i] > 0 ? nums[i] : -nums[i];
            if (nums[val - 1] > 0) nums[val - 1] *= -1;
        }
        
        std::vector<int> results;
        for (auto i = 0; i < nums.size(); ++i)
            if (nums[i] > 0) results.emplace_back(i + 1);
        return results;
    }
};