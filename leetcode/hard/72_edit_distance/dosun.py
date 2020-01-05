"""https://leetcode.com/problems/edit-distance/

Runtime: 148 ms, faster than 83.59% of Python3 online submissions for Edit Distance.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Edit Distance.
"""
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        if len(word1) < len(word2):
            self.minDistance(word2, word1)

        distances = range(len(word1) + 1)
        for i2, c2 in enumerate(word2):
            temp = [i2+1]
            for i1, c1 in enumerate(word1):
                if c1 == c2:
                    temp.append(distances[i1])
                else:
                    temp.append(1 + min((distances[i1], distances[i1 + 1], temp[-1])))
            distances = temp
            
        return distances[-1]
