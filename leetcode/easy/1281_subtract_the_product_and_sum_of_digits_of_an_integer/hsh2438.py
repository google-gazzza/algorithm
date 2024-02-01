"""
https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
Runtime: 24 ms, faster than 84.53% of Python3 online submissions for Subtract the Product and Sum of Digits of an Integer.
Memory Usage: 12.6 MB, less than 100.00% of Python3 online submissions for Subtract the Product and Sum of Digits of an Integer.
"""


class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        nums = list(map(int, str(n)))
        
        products = 1
        total = 0
        
        for num in nums:
            total += num
            products *= num
        
        return products - total
        
        
        
