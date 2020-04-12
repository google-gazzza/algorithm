"""https://leetcode.com/problems/two-sum/

Runtime: 48 ms, faster than 99.35% of Python3 online submissions for Two Sum.
Memory Usage: 15.2 MB, less than 5.11% of Python3 online submissions for Two Sum.
"""

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dic = {}
        for k, v in enumerate(nums):
            if target - v in dic:
                return [dic[target - v], k]
            dic[v] = k
