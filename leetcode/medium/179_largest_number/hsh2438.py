"""
https://leetcode.com/problems/largest-number
Runtime: 144 ms, faster than 5.94% of Python3 online submissions for Largest Number.
Memory Usage: 13.8 MB, less than 7.14% of Python3 online submissions for Largest Number.
"""


class Solution:
    def largestNumber(self, nums):
        if set(nums) == {0}:
            return '0'

        def compare(a, b):
            if a == b:
                return a, b

            str_a, str_b = str(a), str(b)
            len_a, len_b = len(str_a), len(str_b)
            longest = len_a if a > b else len_b
            for i in range(longest):
                aa = str_a[i] if len_a > i else str_a[0]
                bb = str_b[i] if len_b > i else str_b[0]
                if aa > bb:
                    return a, b
                elif bb > aa:
                    return b, a

            return (a, b) if int(str_a+str_b) > int(str_b+str_a) else (b, a)

        for i in range(len(nums)):
            biggest = nums[i]

            for j in range(i+1, len(nums)):
                (big, small) = compare(biggest, nums[j])
                if biggest != big:
                    biggest = big
                    nums[i], nums[j] = nums[j], nums[i]

        return ''.join([str(num) for num in nums])
