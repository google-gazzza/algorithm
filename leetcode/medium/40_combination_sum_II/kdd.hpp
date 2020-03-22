// https://leetcode.com/problems/combination-sum-ii/
// Runtime: 8 ms, faster than 83.92% of C++ online submissions for Combination Sum II.
// Memory Usage: 9 MB, less than 92.11% of C++ online submissions for Combination Sum II.

class Solution {
private:
    template <class Results, class Comb, class Candidates>
    void combSum(Results&& results, Comb&& comb, Candidates&& cand, std::size_t idx, int target) {
        if (target == 0) {
            results.emplace_back(comb);
            return;
        }
        if (target < 0) return;
        if (idx == cand.size()) return;
        for (auto i = idx; i < cand.size(); ++i) {                 
            if(i != idx && cand[i] == cand[i - 1]) continue;
            comb.emplace_back(cand[i]);
            combSum(results, comb, cand, i + 1, target - cand[i]);
            comb.pop_back();
        }
    }
    
public:
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        std::vector<std::vector<int>> results;
        std::vector<int> comb;
        std::sort(candidates.begin(), candidates.end());
        combSum(results, comb, candidates, 0, target);
        return results;
    }
};