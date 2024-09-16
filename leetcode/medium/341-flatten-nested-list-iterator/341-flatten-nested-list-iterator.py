"""
341-flatten-nested-list-iterator
leetcode/medium/341. Flatten Nested List Iterator
difficulty: medium
URL: https://leetcode.com/problems/flatten-nested-list-iterator/
"""


# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
# class NestedInteger:
#    def isInteger(self) -> bool:
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        """
#
#    def getInteger(self) -> int:
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        """
#
#    def getList(self) -> [NestedInteger]:
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        """

class NestedIterator:
    def __init__(self, nestedList: [NestedInteger]):
        self.nestedList = self.flatten(nestedList)
        self.index = 0

    def flatten(self, nestedList: [NestedInteger]) -> [int]:
        if not nestedList:
            return []

        result = []

        for i in nestedList:
            if i.isInteger():
                result.append(i.getInteger())
            else:
                result.extend(self.flatten(i.getList()))

        return result

    def next(self) -> int:
        if self.hasNext():
            result = self.nestedList[self.index]
            self.index += 1
            return result

    def hasNext(self) -> bool:
        return self.index < len(self.nestedList)
