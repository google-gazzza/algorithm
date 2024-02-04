"""
https://leetcode.com/problems/valid-palindrome-ii/
Runtime: 168 ms, faster than 63.12% of Python3 online submissions for Valid Palindrome II.
Memory Usage: 14.4 MB, less than 6.25% of Python3 online submissions for Valid Palindrome II.
"""


class Solution:
    def validPalindrome(self, s: str) -> bool:
        
        
        def is_palindrome(s):
            if not s:
                return False
            len_s_half = int(len(s)/2)
            return s[:len_s_half] == s[:-(len_s_half+1):-1]
        
        
        def get_new_string(s, idx):
            list_s = list(s)
            if idx < len(s):
                del list_s[idx]
                return ''.join(list_s)
            else:
                return False
        
        
        len_s = len(s)
        
        if is_palindrome(s):
            return True
        else:
            i = 0
            while s[i] == s[-(i+1)]:
                i += 1
            return is_palindrome(get_new_string(s, i)) or is_palindrome(get_new_string(s, i-1)) or \
                is_palindrome(get_new_string(s, len(s)-i)) or is_palindrome(get_new_string(s, len(s)-i-1))
