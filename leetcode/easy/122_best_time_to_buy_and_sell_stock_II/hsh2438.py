"""
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
Runtime: 56 ms, faster than 96.94% of Python3 online submissions for Best Time to Buy and Sell Stock II.
Memory Usage: 13.8 MB, less than 87.81% of Python3 online submissions for Best Time to Buy and Sell Stock II.
"""


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        result = 0
        
        for i in range(len(prices)-1):
            if prices[i+1] - prices[i] > 0:
                result += prices[i+1] - prices[i]
        
        return result
