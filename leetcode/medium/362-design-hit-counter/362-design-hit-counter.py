# leetcode/medium/362. Design Hit Counter
# 362-design-hit-counter
# URL: https://leetcode.com/problems/design-hit-counter/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
class HitCounter:
    def __init__(self):
        self.hits = []

    def hit(self, timestamp: int) -> None:
        self.hits.append(timestamp)

    def getHits(self, timestamp: int) -> int:
        return len([hit for hit in self.hits if timestamp - hit < 300])


# Your HitCounter object will be instantiated and called as such:
# obj = HitCounter()
# obj.hit(timestamp)
# param_2 = obj.getHits(timestamp)
hitCounter = HitCounter()
hitCounter.hit(1)  ## hit at timestamp 1.
hitCounter.hit(2)  ## hit at timestamp 2.
hitCounter.hit(3)  ## hit at timestamp 3.
hitCounter.getHits(4)  ## get hits at timestamp 4, return 3.
hitCounter.hit(300)  ## hit at timestamp 300.
hitCounter.getHits(300)  ## get hits at timestamp 300, return 4.
assert hitCounter.getHits(300) == 4
hitCounter.getHits(301)  ## get hits at timestamp 301, return 3.
assert hitCounter.getHits(301) == 3
