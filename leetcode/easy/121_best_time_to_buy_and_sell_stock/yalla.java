// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
// Runtime: 2 ms, faster than 50.63% of Java online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 52 MB, less than 47.42% of Java online submissions for Best Time to Buy and Sell Stock.
class Solution {
	public int maxProfit(int[] prices) {
		int min = Integer.MAX_VALUE;
		int max = Integer.MIN_VALUE;

		for (int price : prices) {
			min = Integer.min(min, price);
			max = Integer.max(price - min, max);
		}

		return max;
	}
}