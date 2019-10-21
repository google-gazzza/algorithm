// http://www.cplusplus.com/reference/algorithm/next_permutation/
// Runtime: 8 ms, faster than 75.35% of C++ online submissions for Next Permutation.
// Memory Usage: 8.5 MB, less than 97.85% of C++ online submissions for Next Permutation.

class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        std::next_permutation(nums.begin(), nums.end());
    }
};