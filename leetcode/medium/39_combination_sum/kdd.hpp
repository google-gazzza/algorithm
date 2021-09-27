// https://leetcode.com/problems/combination-sum/
// Runtime: 8 ms, faster than 98.30% of C++ online submissions for Combination Sum.
// Memory Usage: 9.2 MB, less than 100.00% of C++ online submissions for Combination Sum.

class Solution {
private:
    template <class Results, class Candidates, class Sol>
    void backTracking(Results&& re, Candidates&& cd, Sol&& sol, std::size_t idx, int target) {
        if (target == 0) {
            re.emplace_back(sol);
            return;
        }
        if (target < 0 || idx < 0) return;
        for (auto i = idx; i < cd.size(); ++i) {
            sol.emplace_back(cd[i]);
            backTracking(re, cd, sol, i, target - cd[i]);
            sol.pop_back();
        }                
    }
    
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        std::vector<std::vector<int>> results;
        std::vector<int> sol;
        backTracking(results, candidates, sol, 0, target);        
        return results;
    }
};
