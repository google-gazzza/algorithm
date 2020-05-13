"""
https://leetcode.com/problems/string-compression/
Runtime: 60 ms, faster than 56.95% of Python3 online submissions for String Compression.
Memory Usage: 13.9 MB, less than 6.25% of Python3 online submissions for String Compression.
"""


class Solution:
    def compress(self, chars: List[str]) -> int:
        if len(chars) == 0:
            return 0

        i = 1
        previous = chars[0]
        cnt = 1
        while i < len(chars):
            if chars[i] == previous:
                cnt += 1
                chars.pop(i)
            else:
                if cnt > 1:
                    for ch in str(cnt):
                        chars.insert(i, ch)
                        i+= 1
                previous = chars[i]
                cnt = 1
                i += 1

        if cnt > 1:
            for ch in str(cnt):
                chars.insert(i, ch)
                i += 1
        return len(chars)
