class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        result = 0
        preSum = 0
        sums = defaultdict(int)
        sums[0] = 1

        for num in nums:
            preSum += num
            if preSum - k in sums:
                result += sums[preSum - k]
            sums[preSum] = sums[preSum] + 1

        return result
