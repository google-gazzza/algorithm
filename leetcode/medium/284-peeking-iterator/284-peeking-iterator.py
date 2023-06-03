# leetcode/medium/284. Peeking Iterator
# 284-peeking-iterator
# URL: https://leetcode.com/problems/peeking-iterator/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference


# Below is the interface for Iterator, which is already defined for you.
#
# class Iterator:
#     def __init__(self, nums):
#         """
#         Initializes an iterator object to the beginning of a list.
#         :type nums: List[int]
#         """
#
#     def hasNext(self):
#         """
#         Returns true if the iteration has more elements.
#         :rtype: bool
#         """
#
#     def next(self):
#         """
#         Returns the next element in the iteration.
#         :rtype: int
#         """

class PeekingIterator:
    def __init__(self, iterator):
        self.iterator = iterator
        self.next_val = self.iterator.next()

    def peek(self):
        return self.next_val

    def next(self):
        if self.next_val is not None:
            result = self.next_val
        else:
            return False

        if self.iterator.hasNext():
            self.next_val = self.iterator.next()
        else:
            self.next_val = None

        return result

    def hasNext(self):
        return self.next_val is not None

# Your PeekingIterator object will be instantiated and called as such:
# iter = PeekingIterator(Iterator(nums))
# while iter.hasNext():
#     val = iter.peek()   # Get the next element but not advance the iterator.
#     iter.next()         # Should return the same value as [val].
