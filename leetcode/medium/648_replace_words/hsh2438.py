"""
https://leetcode.com/problems/replace-words/
Runtime: 6280 ms, faster than 5.19% of Python3 online submissions for Replace Words.
Memory Usage: 18.4 MB, less than 70.00% of Python3 online submissions for Replace Words.
"""


class Solution:
    def replaceWords(self, dict: List[str], sentence: str) -> str:
        results = []
        for token in sentence.split():
            replaced = False
            for i in range(len(token)):
                if token[:i] in dict:
                    results.append(token[:i])
                    replaced = True
                    break
            if not replaced:
                results.append(token)
        
        return ' '.join(results)
                
