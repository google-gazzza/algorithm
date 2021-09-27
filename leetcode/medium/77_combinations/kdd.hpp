// https://leetcode.com/problems/combinations/
// Runtime: 80 ms, faster than 73.50% of C++ online submissions for Combinations.
// Memory Usage: 12.6 MB, less than 70.00% of C++ online submissions for Combinations.

class Solution {
private:
    std::vector<std::vector<int>> m_results;
    std::vector<int> m_vec;
    
public:
    Solution()
        : m_results()
        , m_vec()
    {
        m_results.reserve(100);
    }

private:
    void dfs(int idx, int n, int k) {
        if (k == 0) {
            m_results.emplace_back(m_vec);
            return;
        }
        
        for (auto i = idx; i < n; ++i) {
            m_vec.emplace_back(i);
            dfs(i + 1, n, k - 1);
            m_vec.pop_back();
        }
    }
    
public:
    vector<vector<int>> combine(int n, int k) {
        m_vec.reserve(k);
        dfs(1, n + 1, k);
        return m_results;
    }
};