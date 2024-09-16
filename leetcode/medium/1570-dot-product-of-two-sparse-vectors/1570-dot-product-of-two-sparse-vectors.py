"""
1570-dot-product-of-two-sparse-vectors 
leetcode/medium/1570. Dot Product of Two Sparse Vectors
Difficulty: medium
URL: https://leetcode.com/problems/dot-product-of-two-sparse-vectors/
"""


class SparseVector:
    def __init__(self, nums: List[int]):
        self.nums = nums

    def get_nums(self):
        return self.nums

    def dotProduct(self, vec: 'SparseVector') -> int:
        sum = 0
        vec_nums = vec.get_nums()

        for i in range(len(self.nums)):
            sum += self.nums[i] * vec_nums[i]

        return sum


def test():
    nums1 = [1, 0, 0, 2, 3]
    nums2 = [0, 3, 0, 4, 0]
    output = 8
    assert SparseVector(nums1).dotProduct(SparseVector(nums2)) == output

    nums1 = [0, 1, 0, 0, 0]
    nums2 = [0, 0, 0, 0, 2]
    output = 0
    assert SparseVector(nums1).dotProduct(SparseVector(nums2)) == output

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)
