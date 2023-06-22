# leetcode/medium/1286. Iterator for Combination
# 1286-iterator-for-combination
# URL: https://leetcode.com/problems/iterator-for-combination/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
import itertools


class CombinationIterator:

    def __init__(self, characters: str, combinationLength: int):
        self.combination = itertools.combinations(list(characters), combinationLength)
        self.combination = list(map(lambda x: ''.join(x), self.combination))

    def next(self) -> str:
        return self.combination.pop(0)

    def hasNext(self) -> bool:
        return len(self.combination) > 0


# Your CombinationIterator object will be instantiated and called as such:
# obj = CombinationIterator(characters, combinationLength)
# param_1 = obj.next()
# param_2 = obj.hasNext()
itr = CombinationIterator("abc", 2);
assert itr.next() == "ab"  # // return "ab"
assert itr.hasNext() == True  # // return True
assert itr.next() == "ac"  # // return "ac"
assert itr.hasNext() == True  # // return True
assert itr.next() == "bc"  # // return "bc"
assert itr.hasNext() == False  # // return False
