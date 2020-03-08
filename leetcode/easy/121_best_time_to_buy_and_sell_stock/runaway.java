// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Runtime: 1 ms, faster than 62.40% of Java online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 37.2 MB, less than 100.00% of Java online submissions for Best Time to Buy and Sell Stock.

class Solution {
    public int maxProfit(int[] prices) {
        if (prices.length == 0) return 0;
        int min = prices[0];
        int profit = 0;
        for (int i = 1; i < prices.length; i++) {
            int price = prices[i];
            profit = Math.max(profit, price - min);
            min = Math.min(min, price);
        }
        return profit;
    }
}