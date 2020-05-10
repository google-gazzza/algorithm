'''
https://leetcode.com/problems/third-maximum-number/
Runtime: 56 ms, faster than 40.93% of Python3 online submissions for Third Maximum Number.
Memory Usage: 13.6 MB, less than 92.31% of Python3 online submissions for Third Maximum Number.
'''

class Solution:
    def thirdMax(self, nums: List[int]) -> int:
  
        maxs = [float('-inf'), float('-inf'), float('-inf')]
        
        for num in nums:
            if num not in maxs:
                if num > maxs[0]:
                    maxs = [num, maxs[0], maxs[1]]
                elif num > maxs[1]:
                    maxs = [maxs[0], num, maxs[1]]
                elif num > maxs[2]:
                    maxs = [maxs[0], maxs[1], num]

        return max(maxs) if maxs[2] == float('-inf') else maxs[2]
