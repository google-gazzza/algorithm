#Runtime: 60 ms, faster than 85.24% of Python3 online submissions for Longest Substring Without Repeating Characters.
#Memory Usage: 14 MB, less than 5.10% of Python3 online submissions for Longest Substring Without Repeating Characters.

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        
        substring = ''
        longest_len = 0
        for ch in s:
            if ch in substring:
                if len(substring) > longest_len:
                    longest_len = len(substring)
                substring = substring[substring.rfind(ch)+1:] + ch
            else:
                substring+=ch
        if len(substring) > longest_len:
            longest_len = len(substring)
        return longest_len
