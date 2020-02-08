// https://leetcode.com/problems/spiral-matrix/
// Runtime: 4 ms, faster than 57.99% of C++ online submissions for Spiral Matrix.
// Memory Usage: 8.6 MB, less than 100.00% of C++ online submissions for Spiral Matrix.

class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        if (matrix.empty()) return std::vector<int>();
        auto row = matrix.size();
        auto col = matrix[0].size();
        auto lRow = 0;
        auto hRow = row - 1;
        auto lCol = 0;
        auto hCol = col - 1;
        std::vector<int> results;
        results.reserve(row * col);
        while (results.size() < row * col) {
            for (auto c = lCol; c <= hCol; ++c) 
                results.emplace_back(matrix[lRow][c]);
            if (results.size() >= row * col) break;
            ++lRow;
            for (auto r = lRow; r <= hRow; ++r)
                results.emplace_back(matrix[r][hCol]);
            if (results.size() >= row * col) break;
            --hCol;
            for (int32_t c = hCol; c >= lCol; --c)
                results.emplace_back(matrix[hRow][c]);
            if (results.size() >= row * col) break;
            --hRow;
            for (int32_t r = hRow; r >= lRow; --r)
                results.emplace_back(matrix[r][lCol]);
            if (results.size() >= row * col) break;
            ++lCol;
        };    
        
        return results;
    }
};