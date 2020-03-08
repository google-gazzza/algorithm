// https://leetcode.com/problems/set-matrix-zeroes/
// Runtime: 48 ms, faster than 69.53% of C++ online submissions for Set Matrix Zeroes.
// Memory Usage: 11.6 MB, less than 66.67% of C++ online submissions for Set Matrix Zeroes.

class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        std::vector<std::pair<int, int>> zeroPts;
        for (auto i = 0; i < matrix.size(); ++i) {
            for (auto j = 0; j < matrix[0].size(); ++j) {
                if (matrix[i][j] == 0) zeroPts.emplace_back(i, j);
            }
        }
        
        for (auto& zeroPt : zeroPts) {
            for (auto j = 0; j < matrix[0].size(); ++j) {
                matrix[zeroPt.first][j] = 0;
            }
            for (auto i = 0; i < matrix.size(); ++i) {
                matrix[i][zeroPt.second] = 0;    
            }        
        }
    }
};