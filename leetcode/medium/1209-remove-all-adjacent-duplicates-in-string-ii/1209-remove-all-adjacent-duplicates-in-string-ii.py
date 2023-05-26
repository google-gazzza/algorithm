# leetcode/medium/1209. Remove All Adjacent Duplicates in String II
# 1209-remove-all-adjacent-duplicates-in-string-ii
# URL: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:
        arr = list(s)

        if len(arr) < k:
            return ''.join(arr)

        i = 0
        counter = len(arr)

        while (i < counter - k + 1):
            if arr[i] != arr[i + k - 1]:
                i += 1
                continue

            for j in range(i, i + k):
                if arr[i] != arr[j]:
                    break

                if j == i + k - 1:
                    arr[i:j + 1] = []
                    i = max(i - k, -1)
                    counter -= k
                    break

            i += 1

        return ''.join(arr)


s = "abcd"
k = 2
print(Solution().removeDuplicates(s, k))
# Output: "abcd"

s = "deeedbbcccbdaa"
k = 3
print(Solution().removeDuplicates(s, k))
# Output: "aa"

s = "pbbcggttciiippooaais"
k = 2
print(Solution().removeDuplicates(s, k))
Output: "ps"

s = "aa"
k = 2
print(Solution().removeDuplicates(s, k))
