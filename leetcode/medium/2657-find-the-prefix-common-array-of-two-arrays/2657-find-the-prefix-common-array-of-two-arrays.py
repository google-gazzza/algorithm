# leetcode/medium/2657. Find the Prefix Common Array of Two Arrays
# 2657-find-the-prefix-common-array-of-two-arrays
# URL: https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def findThePrefixCommonArray(self, list_a: List[int], list_b: List[int]) -> List[int]:
        set_a = set()
        set_b = set()
        common_set = set()
        result = []

        for i in range(len(list_a)):
            set_a.add(list_a[i])
            set_b.add(list_b[i])
            intersection = set_a & set_b

            for intersect_element in intersection:
                set_a.discard(intersect_element)
                set_b.discard(intersect_element)
                common_set.add(intersect_element)

            result.append(len(common_set))

        return result


A = [1, 3, 2, 4]
B = [3, 1, 2, 4]
print(Solution().findThePrefixCommonArray(A, B))
# Output: [0,2,3,4]

A = [2, 3, 1]
B = [3, 1, 2]
print(Solution().findThePrefixCommonArray(A, B))
# Output: [0,1,3]


A = [2, 1, 4]
B = [3, 1, 2]
print(Solution().findThePrefixCommonArray(A, B))
#
