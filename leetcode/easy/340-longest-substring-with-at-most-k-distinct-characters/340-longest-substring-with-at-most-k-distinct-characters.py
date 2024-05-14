from collections import defaultdict


class Solution:
    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:

        if k == 0:
            return 0

        charArr = []
        countArr = []

        i = 0
        while i < len(s):
            charArr.append(s[i])
            count = 1

            while i + count < len(s) and s[i] == s[i + count]:
                count += 1

            i += count
            countArr.append(count)

        maxWindow = 0
        charCount = defaultdict(int)
        windowSum = 0
        windowArr = []

        for i in range(len(charArr)):
            while charArr[i] not in charCount and len(charCount) >= k:
                char, count = windowArr.pop(0)
                windowSum -= count

                charCount[char] -= 1
                if charCount[char] == 0:
                    del charCount[char]

            charCount[charArr[i]] += 1
            windowArr.append((charArr[i], countArr[i]))
            windowSum += countArr[i]

            maxWindow = max(maxWindow, windowSum)

        return maxWindow
