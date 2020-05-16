"""
https://leetcode.com/problems/build-an-array-with-stack-operations/
Runtime: 28 ms, faster than 94.24% of Python3 online submissions for Build an Array With Stack Operations.
Memory Usage: 13.7 MB, less than 100.00% of Python3 online submissions for Build an Array With Stack Operations.
"""


class Solution:
    def buildArray(self, target: List[int], n: int) -> List[str]:
        
        result = []
        target_idx = 0  
        
        for i in range(1, n+1):
            
            if target_idx == len(target):
                break
            
            result.append("Push")
            if target[target_idx] == i:
                target_idx += 1
            else:
                result.append("Pop")
        
        return result
