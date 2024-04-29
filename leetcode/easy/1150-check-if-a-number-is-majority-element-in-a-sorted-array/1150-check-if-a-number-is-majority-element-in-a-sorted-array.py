class Solution:
    def isMajorityElement(self, nums: List[int], target: int) -> bool:
        count = 0

        for element in nums:
            if element == target:
                count += 1

        return count > len(nums) / 2


