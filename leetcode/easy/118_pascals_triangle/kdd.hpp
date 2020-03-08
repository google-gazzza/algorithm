// https://leetcode.com/problems/pascals-triangle/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Pascal's Triangle.
// Memory Usage: 8.7 MB, less than 96.30% of C++ online submissions for Pascal's Triangle.

class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        if (numRows == 0) return std::vector<std::vector<int>>();
        std::vector<std::vector<int>> results;
        results.reserve(numRows);
        results.emplace_back(1, 1);
        if (numRows == 1) return results;
        
        results.emplace_back(std::vector{1, 1});        
        for (auto i = 1; i < numRows - 1; ++i) {
            auto& prev = results[i];   
            std::vector vec{1};
            for (auto j = 0; j < prev.size() - 1; ++j) vec.emplace_back(prev[j] + prev[j + 1]);
            vec.emplace_back(1);
            results.emplace_back(vec);
        }
        
        return results;
    }
};