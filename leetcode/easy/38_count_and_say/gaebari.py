"""
https://leetcode.com/problems/count-and-say
Runtime: 36 ms, faster than 37.55% of Python3 online submissions for Count and Say.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Count and Say.
"""
class Solution:
    def countAndSay(self, n: int) -> str:
        result = '1'

        for i in range(1, n):
            tmp = ''
            skip = 0

            for j in range(len(result)):
                count = 1

                if skip:
                    skip -= 1
                    continue

                for k in range(j, len(result) - 1):
                    if result[k] != result[k + 1]:
                        break
                    count += 1
                    skip += 1

                tmp += str(count)
                tmp += result[j]

            result = tmp

        return result