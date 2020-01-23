"""
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
Runtime: 60 ms, faster than 88.81% of Python3 online submissions for Best Time to Buy and Sell Stock II.
Memory Usage: 13.8 MB, less than 87.81% of Python3 online submissions for Best Time to Buy and Sell Stock II.
"""

class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        if prices is None or len(prices) < 2:
            return 0

        inTransaction = False
        profit = 0

        for i in range(len(prices) - 1):
            if inTransaction:
                if prices[i + 1] < prices[i]:
                    profit += prices[i] - prices[i - 1]
                    inTransaction = False
                else:
                    prices[i] = prices[i-1]

            elif not inTransaction:
                if prices[i + 1] > prices[i]:
                    inTransaction = True
                else:
                    pass

        if inTransaction:
            profit += prices[-1] - prices[-2]

        return profit
