"""https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

Runtime: 64 ms, faster than 95.42% of Python3 online submissions for Best Time to Buy and Sell Stock II.
Memory Usage: 13.7 MB, less than 95.12% of Python3 online submissions for Best Time to Buy and Sell Stock II.
"""
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        for i in range(1, len(prices)):
            current = prices[i]
            prev = prices[i - 1]
            if current > prev:
                max_profit += current - prev
        return max_profit
