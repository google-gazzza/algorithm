// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// Runtime: 4 ms, faster than 97.86% of C++ online submissions for Best Time to Buy and Sell Stock II.
// Memory Usage: 9.4 MB, less than 100.00% of C++ online submissions for Best Time to Buy and Sell Stock II.

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if (prices.empty()) return 0;
        int result = 0;
        for (auto iter = prices.begin(); iter + 1 != prices.end(); ++iter) {
            if (*iter < *(iter + 1)) result += *(iter + 1) - *iter;
        }
        
        return result;
    }
};
