"""https://leetcode.com/problems/number-of-1-bits/

Runtime: 20 ms, faster than 51.43% of Python online submissions for Number of 1 Bits.
Memory Usage: 11.9 MB, less than 5.00% of Python online submissions for Number of 1 Bits.
"""
class Solution(object):
    def hammingWeight(self, n):
        """
        :type n: int
        :rtype: int
        """
        return bin(n).count('1')
        
        

"""https://leetcode.com/problems/number-of-1-bits/

Runtime: 12 ms, faster than 93.45% of Python online submissions for Number of 1 Bits.
Memory Usage: 12 MB, less than 5.00% of Python online submissions for Number of 1 Bits.
"""
class Solution(object):
    def hammingWeight(self, n):
        """
        :type n: int
        :rtype: int
        """
        return sum([n & (1 << i) > 0 for i in range(32)])

        
