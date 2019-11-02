"""https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

Runtime: 68 ms, faster than 96.41% of Python3 online submissions for Two Sum II - Input array is sorted.
Memory Usage: 14.2 MB, less than 5.80% of Python3 online submissions for Two Sum II - Input array is sorted.
"""

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        dic = {}
        for k, v in enumerate(numbers):
            if target - v in dic:
                return [dic[target - v] + 1, k + 1]
            dic[v] = k
