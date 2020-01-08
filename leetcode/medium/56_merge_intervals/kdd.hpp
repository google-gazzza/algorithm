// https://leetcode.com/problems/merge-intervals/
// Runtime: 16 ms, faster than 94.07% of C++ online submissions for Merge Intervals.
// Memory Usage: 12.5 MB, less than 75.58% of C++ online submissions for Merge Intervals.

class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        if (intervals.empty()) return std::vector<std::vector<int>>();
        std::sort(intervals.begin(), intervals.end(), [](auto&& l, auto&& r) {
           return l[0] < r[0]; 
        });
        std::vector<std::vector<int>> results;
        results.reserve(intervals.size());
        results.emplace_back(intervals[0]);
        for (auto i = 1; i < intervals.size(); ++i) {
            if (results.back()[0] <= intervals[i][0] && intervals[i][0] <= results.back()[1]) {
                if (results.back()[1] < intervals[i][1]) results.back()[1] = intervals[i][1];
            }
            else
                results.emplace_back(intervals[i]);
        }        
        return results;
    }
};