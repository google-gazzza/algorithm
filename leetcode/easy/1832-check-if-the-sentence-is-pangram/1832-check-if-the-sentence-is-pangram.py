"""
1832-check-if-the-sentence-is-pangram 
leetcode/easy/1832. Check if the Sentence Is Pangram
Difficulty: easy
URL: https://leetcode.com/problems/check-if-the-sentence-is-pangram/
"""


class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        return len(set(sentence)) == 26



def test():
    solution = Solution()

    sentence = "thequickbrownfoxjumpsoverthelazydog"
    assert solution.checkIfPangram(sentence) == True

    sentence = "leetcode"
    assert solution.checkIfPangram(sentence) == False