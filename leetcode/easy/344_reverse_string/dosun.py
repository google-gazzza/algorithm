"""https://leetcode.com/problems/reverse-string/

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Runtime: 224 ms, faster than 93.28% of Python3 online submissions for Reverse String.
Memory Usage: 18 MB, less than 5.81% of Python3 online submissions for Reverse String.
"""

class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        left = 0
        right = len(s) - 1

        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1
