# // 3110-score-of-a-string
# // URL: https://leetcode.com/problems/score-of-a-string/description/

class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        lowerSet = set()
        upperSet = set()
        count = 0

        for i in range(len(word)):
            if word[i].islower():
                lowerSet.add(word[i])
            else:
                upperSet.add(word[i])

        for element in lowerSet:
            if element.upper() in upperSet:
                count += 1

        return count
