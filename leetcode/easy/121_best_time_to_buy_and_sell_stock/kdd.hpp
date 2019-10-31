// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Runtime: 4 ms, faster than 98.17% of C++ online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 9.6 MB, less than 55.96% of C++ online submissions for Best Time to Buy and Sell Stock.

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int profit = 0;
        auto subMin = std::numeric_limits<int>::max();
        auto subMax = -1;
        for (auto iter = prices.cbegin(); iter != prices.cend(); ++iter) {
            if (subMax < *iter) subMax = *iter;                       
            if (subMin > *iter) {
                subMin = *iter;
                subMax = -1;
            }                        
            auto subProfit = subMax - subMin;
            if (subProfit > profit) profit = subProfit;                   
        }        
        return profit;
    }
};
