// https://leetcode.com/problems/contains-duplicate/
// Runtime: 40 ms, faster than 63.20% of C++ online submissions for Contains Duplicate.
// Memory Usage: 15.1 MB, less than 79.12% of C++ online submissions for Contains Duplicate.

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        std::unordered_set<int> sets(nums.size());
        for (auto num : nums) {
            if (sets.find(num) != sets.end()) return true;
            else sets.emplace(num);
        }
        return false;
    }
};