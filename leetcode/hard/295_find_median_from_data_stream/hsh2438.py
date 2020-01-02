"""
https://leetcode.com/problems/find-median-from-data-stream/
Runtime: 232 ms, faster than 39.41% of Python3 online submissions for Find Median from Data Stream.
Memory Usage: 24 MB, less than 6.67% of Python3 online submissions for Find Median from Data Stream.
"""


import bisect


class MedianFinder:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stream = []
        

    def addNum(self, num: int) -> None:
        bisect.insort(self.stream, num)
        

    def findMedian(self) -> float:
        if len(self.stream)%2 == 0:
            return (self.stream[int(len(self.stream)/2)-1] + self.stream[int(len(self.stream)/2)])/2
        else:
            return self.stream[int(len(self.stream)/2)]


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()
