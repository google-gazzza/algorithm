// https://leetcode.com/problems/gas-station/
// Runtime: 4 ms, faster than 98.98% of C++ online submissions for Gas Station.
// Memory Usage: 9 MB, less than 94.12% of C++ online submissions for Gas Station.

class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        int gasAcc = 0, costAcc = 0;
        int acc = 0;
        int idx = 0;
        for (auto i = 0; i < gas.size(); ++i) {
            gasAcc += gas[i];
            costAcc += cost[i];
            acc += gas[i] - cost[i];
            if (acc < 0) {
                acc = 0;
                idx = i + 1;
            }
        }
        if (gasAcc < costAcc) return -1;
        return idx;
    }
};