"""
https://leetcode.com/problems/find-k-closest-elements/
Runtime: 352 ms, faster than 34.75% of Python3 online submissions for Find K Closest Elements.
Memory Usage: 15 MB, less than 8.33% of Python3 online submissions for Find K Closest Elements.
"""


import bisect


class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        results = []

        arr.sort()

        position = bisect.bisect_left(arr, x)
        position_left = position - 1
        position_right = position

        while(len(results) < k):
            
            if position_left == -1 and position_right == len(arr):
                break
            if position_left == -1:
                results.append(arr[position_right])
                position_right += 1
                continue
            if position_right == len(arr):
                results.insert(0, arr[position_left])
                position_left -= 1
                continue

            if x - arr[position_left] > arr[position_right] - x:
                results.append(arr[position_right])
                position_right += 1
            else:
                results.insert(0, arr[position_left])
                position_left -= 1
        
        return results
