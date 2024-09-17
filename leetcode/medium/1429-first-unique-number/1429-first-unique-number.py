# leetcode/medium/1429. First Unique Number
# 1429-first-unique-number
# URL: https://leetcode.com/problems/first-unique-number/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class FirstUnique:

    def __init__(self, nums: List[int]):
        self.list = []
        self.uniq_list = []
        self.uniq_set = set()
        self.duplicates_set = set()

        for num in nums:
            self.add(num)

    def showFirstUnique(self) -> int:
        return self.uniq_list[0] if self.uniq_list else -1

    def add(self, value: int) -> None:
        self.list.append(value)

        if value not in self.duplicates_set:
            self.uniq_set.add(value)
            self.uniq_list.append(value)
            self.duplicates_set.add(value)
        elif value in self.uniq_set:
            self.uniq_list.remove(value)
            self.uniq_set.remove(value)


# Your FirstUnique object will be instantiated and called as such:
# obj = FirstUnique(nums)
# param_1 = obj.showFirstUnique()
# obj.add(value)

obj = FirstUnique([1])
obj.add(1)
obj.add(1)
print(obj.showFirstUnique())
# ["FirstUnique","add","add","showFirstUnique"]
# [[[1]],[1],[1],[]]
