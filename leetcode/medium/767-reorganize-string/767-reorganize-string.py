# leetcode/medium/767. Reorganize String
# 767-reorganize-string
# URL: https://leetcode.com/problems/reorganize-string/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
import collections


class Solution:
    def reorganizeString(self, s: str) -> str:
        counter_list = list(collections.Counter(s).items())
        counter_list.sort(key=lambda x: x[1], reverse=True)
        result_arr = []

        if counter_list[0][1] > (len(s) + 1) // 2:
            return ''

        for i in range(len(s)):
            target_index = 0

            if result_arr and result_arr[-1] == counter_list[0][0]:
                target_index += 1

            result_arr.append(counter_list[target_index][0])
            counter_list[target_index] = (counter_list[target_index][0], counter_list[target_index][1] - 1)

            counter_list.sort(key=lambda x: x[1], reverse=True)

        return ''.join(result_arr)


s = "aab"
print(Solution().reorganizeString(s))
assert Solution().reorganizeString(s) == 'aba'
# Output: "aba"

s = "aaab"
print(Solution().reorganizeString(s))
assert Solution().reorganizeString(s) == ''
# Output: ""

s = "aabb"
print(Solution().reorganizeString(s))
assert Solution().reorganizeString(s) == 'abab'
