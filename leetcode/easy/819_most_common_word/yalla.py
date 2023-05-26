"""
https://leetcode.com/problems/most-common-word/
Runtime: 32 ms, faster than 96.79% of Python3 online submissions for Most Common Word.
Memory Usage: 13.9 MB, less than 40.99% of Python3 online submissions for Most Common Word.
"""
class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        count = {}
        only_words = re.sub("[^a-z]", " ", paragraph.lower())

        for word in only_words.split():
            if word in banned:
                continue

            if word in count:
                count[word] += 1
            else:
                count[word] = 0

        return max(count, key = count.get)
