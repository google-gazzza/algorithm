// https://leetcode.com/problems/triangle/
// Runtime: 8 ms, faster than 56.37% of C++ online submissions for Triangle.
// Memory Usage: 9.7 MB, less than 100.00% of C++ online submissions for Triangle.

class Solution {     
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        auto minState = triangle.back();
        for (int32_t h = triangle.size() - 2; h >= 0; --h) {
            for (auto w = 0; w < triangle[h].size(); ++w) {
                minState[w] = triangle[h][w] + std::min(minState[w], minState[w + 1]);
            }
        }
        
        return minState.front();
    }
};