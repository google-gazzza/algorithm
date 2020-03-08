"""
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
Runtime: 60 ms, faster than 91.24% of Python3 online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 14 MB, less than 51.72% of Python3 online submissions for Best Time to Buy and Sell Stock.
"""

class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        if not prices or len(prices) < 2:
            return 0

        max_profit = 0
        min_price = None

        for i in prices:
            if min_price is None:
                min_price = i

            elif i > min_price:
                max_profit = max(max_profit, i - min_price)

            elif i < min_price:
                min_price = min(min_price, i)

        return max_profit


