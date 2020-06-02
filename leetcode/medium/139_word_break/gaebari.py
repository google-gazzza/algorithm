# https://leetcode.com/problems/word-break/
# Runtime: 24 ms, faster than 99.41% of Python3 online submissions for Word Break.
# Memory Usage: 14 MB, less than 5.55% of Python3 online submissions for Word Break.

class Solution:
    def wordBreak(self, s, words):
        ok = [True]
        ㅡ = min(map(len,words+['']))
        max_len = max(map(len,words+['']))
        words = set(words)
        for i in range(1, len(s)+1):
            ok += any(ok[j] and s[j:i] in words for j in range(max(0, i-max_len), i)),

        return ok[-1]

