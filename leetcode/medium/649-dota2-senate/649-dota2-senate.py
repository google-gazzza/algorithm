# leetcode/medium/649. Dota2 Senate
# 649-dota2-senate
# URL: https://leetcode.com/problems/dota2-senate/description/
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

class Solution:
    def isAllSameSide(self, senate: str) -> bool:
        if len(senate) == 0:
            return True

        if senate.count('R') == 0 or senate.count('D') == 0:
            return True

        return False

    def removeOppsiteSenator(self, senate_list: list, index: int) -> None:
        if len(senate_list) < 2:
            return

        target = 'R'
        if senate_list[index] == 'R':
            target = 'D'

        i = index + 1

        while i < len(senate_list):
            if senate_list[i] == target:
                senate_list.pop(i)
                return
            i += 1

        if target in senate_list:
            senate_list.remove(target)

    def predictPartyVictory(self, senate: str) -> str:
        senate_list = list(senate)

        while len(senate_list) > 1:
            if self.isAllSameSide(senate_list):
                break

            index = 0

            while index < len(senate_list):
                self.removeOppsiteSenator(senate_list, index)
                index += 1

        if senate_list[0] == "R":
            return "Radiant"

        return "Dire"


senate = "RD"
assert Solution().predictPartyVictory(senate) == "Radiant"
# Output: "Radiant"

senate = "RDD"
assert Solution().predictPartyVictory(senate) == "Dire"
# Output: "Dire"

senate = "DDR"
assert Solution().predictPartyVictory(senate) == "Dire"

