"""https://leetcode.com/problems/first-bad-version/

Runtime: 24 ms, faster than 92.31% of Python3 online submissions for First Bad Version.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for First Bad Version.
"""
import bisect

# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
# def isBadVersion(version):

class Solution:        
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        class A:
            def __getitem__(self, i):
                return isBadVersion(i)
            
        return bisect.bisect(a=A(), x=False, lo=0, hi=n)
