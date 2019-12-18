// https://leetcode.com/problems/majority-element/
// Runtime: 20 ms, faster than 78.00% of C++ online submissions for Majority Element.
// Memory Usage: 11.2 MB, less than 36.36% of C++ online submissions for Majority Element.

class Solution {
public:
    int majorityElement(vector<int>& nums) {
        std::unordered_map<int, int> m;
        for (auto& num : nums) {
            if (m.find(num) != m.end()) ++m[num];
            else m[num] = 1;
        }
        
        std::pair<int, int> result{std::numeric_limits<int>::min(), std::numeric_limits<int>::min()};
        for (auto& item : m) {
            if (result.second < item.second) result = item;
        }
        
        return result.first;
    }
};

// https://leetcode.com/problems/majority-element/
// Runtime: 32 ms, faster than 8.95% of C++ online submissions for Majority Element.
// Memory Usage: 11.2 MB, less than 36.36% of C++ online submissions for Majority Element.

class Solution {
public:
    int majorityElement(vector<int>& nums) {
        auto size = nums.size() * 0.5;
        std::sort(nums.begin(), nums.end());
        return nums[size];
    }
};