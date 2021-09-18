
"""
1773-count-items-matching-a-rule 
leetcode/easy/1773. Count Items Matching a Rule
Difficulty: easy
URL: https://leetcode.com/problems/count-items-matching-a-rule/
"""


class Solution:
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        key_index = {
            'type': 0,
            'color': 1,
            'name': 2,
        }

        return sum([1 if item[key_index[ruleKey]] == ruleValue else 0 for item in items])


# Best practice
class Solution:
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        d = {'type': 0, 'color': 1, 'name': 2}
        return sum(1 for item in items if item[d[ruleKey]] == ruleValue)


def test():
    s = Solution()

    input = [
        ["phone", "blue", "pixel"],
        ["computer", "silver", "lenovo"],
        ["phone", "gold", "iphone"],
    ]
    ruleKey = "color"
    ruleValue = "silver"
    assert s.countMatches(input, ruleKey, ruleValue) == 1

    input = [
        ["phone", "blue", "pixel"],
        ["computer", "silver", "phone"],
        ["phone", "gold", "iphone"],
    ]
    ruleKey = "type"
    ruleValue = "phone"
    assert s.countMatches(input, ruleKey, ruleValue) == 2
