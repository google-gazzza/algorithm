// https://leetcode.com/problems/height-checker/
// Runtime: 4 ms, faster than 62.80% of C++ online submissions for Height Checker.
// Memory Usage: 7.7 MB, less than 100.00% of C++ online submissions for Height Checker.

class Solution {
public:
    int heightChecker(vector<int>& heights) {
        int result = 0;
        auto sorted = heights;
        std::sort(sorted.begin(), sorted.end());
        for (auto i = 0; i < heights.size(); ++i) {
            if (heights[i] != sorted[i]) ++result;
        }
        
        return result;
    }
};