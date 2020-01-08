"""
https://leetcode.com/problems/substring-with-concatenation-of-all-words/
Runtime: 564 ms, faster than 40.90% of Python3 online submissions for Substring with Concatenation of All Words.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Substring with Concatenation of All Words.
"""

class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        if len(words) == 0:
            return []
        
        words.sort()
        n = len(words[0])
        N = len(words) * n
        
        answer = []
        i = 0
        while i < len(s) - N + 1:
            
            splited = [s[j:j + n] for j in range(i, i + N, n)]
            splited.sort()

            if splited == words:
                answer.append(i)
                
            i += 1
            
        return answer

