"""
https://leetcode.com/problems/4sum/
Runtime: 192 ms, faster than 66.03% of Python3 online submissions for 4Sum.
Memory Usage: 19.8 MB, less than 7.14% of Python3 online submissions for 4Sum.
"""


class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        two_sums = {}

        for i in range(len(nums)-1):
            for j in range(i+1, len(nums)):
                two_sum = nums[i]+nums[j]
                if two_sum in two_sums:
                    two_sums[two_sum].append(set([i,j]))
                else:
                    two_sums[two_sum] = [set([i,j])]

        results = set()
        for key in two_sums.keys():
            target_key = target-key
            if target_key in two_sums.keys():
                for target_values in two_sums[target_key]:
                    for values in two_sums[key]:
                        result = target_values | values
                        if len(result) == 4:
                            results.add(tuple(sorted([nums[idx] for idx in result])))

        return results        
