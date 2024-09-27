# leetcode/medium/443. String Compression
# 443-string-compression
# URL: https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&id=leetcode-75
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def findLastSameChar(self, chars: List[str], index: int) -> int:
        last = index

        while last < len(chars) and chars[index] == chars[last]:
            last += 1

        return last - 1

    def compress(self, chars: List[str]) -> int:
        index = 0
        result_arr = []

        while index < len(chars):
            last_index = self.findLastSameChar(chars, index)
            count = last_index - index + 1
            result_arr.append(chars[index])

            if count > 1:
                result_arr.extend(list(str(count)))

            index += count

        chars[:] = result_arr

        return len(result_arr)


chars = ["a", "a", "b", "b", "c", "c", "c"]
print(Solution().compress(chars))
# Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]


chars = ["a"]
print(Solution().compress(chars))
# Output: Return 1, and the first character of the input array should be: ["a"]


chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
print(Solution().compress(chars))
# Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
