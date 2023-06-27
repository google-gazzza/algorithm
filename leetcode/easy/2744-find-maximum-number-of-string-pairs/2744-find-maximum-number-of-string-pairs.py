# leetcode/easy/2744. Find Maximum Number of String Pairs
# 2744-find-maximum-number-of-string-pairs
# URL: https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/

# codewars/4kyu/Most frequently used words in a text
# most-frequently-used-words-in-a-text
# URL: https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/python
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from collections import Counter
from typing import List


class Solution:
    def maximumNumberOfStringPairs(self, words: List[str]) -> int:
        new_words = []

        for word in words:
            new_words.append("".join(sorted(word)))

        counted_words = Counter(new_words)

        return len(
            list(
                filter(
                    lambda x: x[1] > 1,
                    counted_words.items()
                )
            )
        )


words = ["cd", "ac", "dc", "ca", "zz"]
assert Solution().maximumNumberOfStringPairs(words) == 2
# Output: 2

words = ["ab", "ba", "cc"]
assert Solution().maximumNumberOfStringPairs(words) == 1
# Output: 1

words = ["aa", "ab"]
assert Solution().maximumNumberOfStringPairs(words) == 0
# Output: 0
