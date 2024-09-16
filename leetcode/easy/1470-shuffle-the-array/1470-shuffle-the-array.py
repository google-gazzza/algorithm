"""
1470-shuffle-the-array 
leetcode/easy/1470. Shuffle the Array
Difficulty: easy
URL: https://leetcode.com/problems/shuffle-the-array/
"""

class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        result = []

        for i in range(0, n):
            result.append(nums[i])
            result.append(nums[n + i])

        return result


def test():
    solution = Solution()

    nums = [2, 5, 1, 3, 4, 7]
    n = 3
    output: [2, 3, 5, 4, 1, 7]
    assert solution.shuffle(nums, n) == output

    nums = [1, 2, 3, 4, 4, 3, 2, 1]
    n = 4
    output: [1, 4, 2, 3, 3, 2, 4, 1]
    assert solution.shuffle(nums, n) == output

    nums = [1, 1, 2, 2]
    n = 2
    output: [1, 2, 1, 2]
    assert solution.shuffle(nums, n) == output