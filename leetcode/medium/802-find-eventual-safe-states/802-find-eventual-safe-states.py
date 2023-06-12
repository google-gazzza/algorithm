# leetcode/medium/802. Find Eventual Safe States
# 802-find-eventual-safe-states
# URL: https://leetcode.com/problems/find-eventual-safe-states/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

from typing import List


class Solution:
    def __init__(self):
        self.safe_nodes_set = set()

    def isSafeNode(self, index, node):
        if index in self.safe_nodes_set:
            return True

        for i in node:
            if i not in self.safe_nodes_set:
                return False

        return True

    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        for i in range(len(graph)):
            if graph[i] == []:
                self.safe_nodes_set.add(i)

        has_safe_nodes = True

        while has_safe_nodes:
            has_safe_nodes = False

            for i in range(len(graph)):
                if i not in self.safe_nodes_set and self.isSafeNode(i, graph[i]):
                    self.safe_nodes_set.add(i)
                    has_safe_nodes = True

        return sorted(list(self.safe_nodes_set))


graph = [[1, 2], [2, 3], [5], [0], [5], [], []]
assert Solution().eventualSafeNodes(graph) == [2, 4, 5, 6]
Output: [2, 4, 5, 6]

graph = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]
assert Solution().eventualSafeNodes(graph) == [4]
# Output: [4]

graph = [[], [0, 2, 3, 4], [3], [4], []]
assert Solution().eventualSafeNodes(graph) == [0, 1, 2, 3, 4]
# [0,1,2,3,4]

graph = [[1, 3, 4, 5, 7, 9], [1, 3, 8, 9], [3, 4, 5, 8], [1, 8], [5, 7, 8], [8, 9], [7, 8, 9], [3], [], []]
assert Solution().eventualSafeNodes(graph) == [5, 8, 9]
# [5,8,9]
