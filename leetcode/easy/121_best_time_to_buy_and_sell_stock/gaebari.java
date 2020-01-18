// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Runtime: 1 ms, faster than 62.11% of Java online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 37.7 MB, less than 98.67% of Java online submissions for Best Time to Buy and Sell Stock.
class Solution {
    public int maxProfit(int[] prices) {
        int result = 0;
        int count = 0;
        for (int i = 1; i < prices.length; i ++){
            int compare = prices[i] - prices[count];
            if (compare > result){
                result = compare;
            }
            if (prices[i] < prices[count])
                count = i;
        }
        return result;
    }
}