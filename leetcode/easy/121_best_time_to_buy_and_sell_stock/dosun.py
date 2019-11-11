"""https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

Runtime: 68 ms, faster than 93.82% of Python3 online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 13.9 MB, less than 77.01% of Python3 online submissions for Best Time to Buy and Sell Stock.
"""

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) == 0: return 0
        max_profit = 0
        min_price = prices[0]
        for price in prices:
            min_price = min(min_price, price)
            profit = price - min_price
            max_profit = max(max_profit, profit)
            
        return max_profit
        
