'''
https://leetcode.com/problems/longest-palindrome/
Runtime: 24 ms, faster than 94.21% of Python3 online submissions for Longest Palindrome.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Longest Palindrome.
'''

class Solution:
    def longestPalindrome(self, s: str) -> int:
        
        import collections
        
        counts = collections.Counter(s)
        center, sides = 0, 0
        
        for count in counts.values():
            sides += (count // 2) * 2
    
            if center == 0:
                center += count % 2
                
        return sides + center
        