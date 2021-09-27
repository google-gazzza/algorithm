// https://leetcode.com/problems/contains-duplicate-ii/
// Runtime: 24 ms, faster than 96.21% of C++ online submissions for Contains Duplicate II.
// Memory Usage: 15.5 MB, less than 52.94% of C++ online submissions for Contains Duplicate II.

class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        std::unordered_map<int, int> m;
        for (auto i = 0; i < nums.size(); ++i) {
            if (m.find(nums[i]) == m.end()) m.emplace(nums[i], i);
            else {
                auto diff = std::abs(m.find(nums[i])->second - i);
                if (diff <= k) return true;
                else m[nums[i]] = i;
            }
        }
        
        return false;
    }
};