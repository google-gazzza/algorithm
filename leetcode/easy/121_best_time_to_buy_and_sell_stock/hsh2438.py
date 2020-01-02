"""
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
Runtime: 52 ms, faster than 99.47% of Python3 online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 13.9 MB, less than 86.21% of Python3 online submissions for Best Time to Buy and Sell Stock.
"""


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if prices == []:
            return 0
        
        max_profit = 0
        
        local_min = prices[0]
        for price in prices:
            profit = price - local_min
            
            if profit > max_profit:
                max_profit = profit
            
            if local_min > price:
                local_min = price
        
        return max_profit
