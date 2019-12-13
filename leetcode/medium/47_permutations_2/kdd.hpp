// https://leetcode.com/problems/permutations-ii/
// Runtime: 20 ms, faster than 96.21% of C++ online submissions for Permutations II.
// Memory Usage: 9.6 MB, less than 100.00% of C++ online submissions for Permutations II.

class Solution {
public:
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        std::sort(nums.begin(), nums.end());
        std::vector<std::vector<int>> results;
        do {
            results.emplace_back(nums);
        } while (std::next_permutation(nums.begin(), nums.end()));
        return results;
    }
};