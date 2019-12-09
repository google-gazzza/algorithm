// https://leetcode.com/problems/permutations/
// Runtime: 12 ms, faster than 68.15% of C++ online submissions for Permutations.
// Memory Usage: 9.2 MB, less than 95.52% of C++ online submissions for Permutations.

class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        std::vector<std::vector<int>> results;
        std::sort(nums.begin(), nums.end());
        do {
            results.emplace_back(nums);
        } while (std::next_permutation(nums.begin(), nums.end()));
        return results;
    }
};