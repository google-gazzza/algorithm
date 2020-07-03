"""
https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
Runtime: 368 ms, faster than 19.36% of Python3 online submissions for Find K Pairs with Smallest Sums.
Memory Usage: 48.5 MB, less than 11.11% of Python3 online submissions for Find K Pairs with Smallest Sums.
"""


class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        all_pairs = []

        for num1 in nums1:
            for num2 in nums2:
                all_pairs.append([num1, num2])
        
        sorted_all_pairs = sorted(all_pairs, key=lambda x: x[0]+x[1])

        return sorted_all_pairs[:k]
