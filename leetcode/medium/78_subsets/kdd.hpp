// https://leetcode.com/problems/subsets/
// Runtime: 4 ms, faster than 97.83% of C++ online submissions for Subsets.
// Memory Usage: 9.4 MB, less than 49.15% of C++ online submissions for Subsets.

class Solution {
public:    
    template <class Nums, class Results>
    void subset(std::size_t idx, std::vector<int> set, Nums&& nums, Results&& results) {
        results.emplace_back(set);
        if (idx == nums.size()) return;
        for (auto i = idx; i < nums.size(); ++i) {
            set.emplace_back(nums[i]);
            subset(i + 1, set, nums, results);
            set.pop_back();
        }
    }
    
    vector<vector<int>> subsets(vector<int>& nums) {
        std::vector<std::vector<int>> results;
        subset(0, {}, nums, results);
        return results;
    }
};