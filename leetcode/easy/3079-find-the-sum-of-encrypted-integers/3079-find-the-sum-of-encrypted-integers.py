# Definition for singly-linked list.
from typing import List


class Solution:
    def sumOfEncryptedInt(self, nums: List[int]) -> int:
        strNums = list(map(str, nums))
        result = []

        for strNum in strNums:
            length = len(strNum)
            maxNum = max(strNum)
            result.append(int(maxNum * length))

        return sum(result)
