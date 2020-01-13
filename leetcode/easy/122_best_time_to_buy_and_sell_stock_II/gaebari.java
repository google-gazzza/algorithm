// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
// Runtime: 1 ms, faster than 85.19% of Java online submissions for Best Time to Buy and Sell Stock II.
// Memory Usage: 37.4 MB, less than 100.00% of Java online submissions for Best Time to Buy and Sell Stock II.
class Solution {
    public int maxProfit(int[] prices) {
        int max = 0;
        int result = 0;
        for (int i = 0; i < prices.length - 1; i++) {
            for (int j = i + 1; j< prices.length; j++) {
                if (prices[i] < prices[j]) {
                    max = Math.max(max, prices[j] - prices[i] );
                    if ( j < prices.length -1 && prices[j] > prices[j+1] ) {
                        result += max;
                        max = 0;
                        i = j;
                        break;
                    }

                } else {
                    i = j;
                }


            }
        }
        return result + max;
    }
}