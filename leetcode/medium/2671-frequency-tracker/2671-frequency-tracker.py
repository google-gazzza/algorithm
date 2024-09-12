# leetcode/medium/2671. Frequency Tracker
# 2671-frequency-tracker
# URL: https://leetcode.com/problems/frequency-tracker/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference


class FrequencyTracker:
    def __init__(self):
        self.frequencyMap = {}
        self.numberMap = {}

    def add(self, number: int) -> None:
        if self.numberMap.get(number) is None:
            self.numberMap[number] = 0

        count = self.numberMap[number]

        if self.frequencyMap.get(count) is not None:
            if number in self.frequencyMap[count]:
                self.frequencyMap[count].remove(number)
            if len(self.frequencyMap[count]) == 0:
                del self.frequencyMap[count]

        self.numberMap[number] += 1
        count = self.numberMap[number]

        if self.frequencyMap.get(count) is None:
            self.frequencyMap[count] = set()

        self.frequencyMap[count].add(number)

    def deleteOne(self, number: int) -> None:
        if self.numberMap.get(number) is None:
            return

        count = self.numberMap[number]
        self.frequencyMap[count].remove(number)

        if len(self.frequencyMap[count]) == 0:
            del self.frequencyMap[count]

        self.numberMap[number] -= 1
        count = self.numberMap[number]

        if count == 0:
            del self.numberMap[number]

        if self.frequencyMap.get(count) is None:
            self.frequencyMap[count] = set()

        self.frequencyMap[count].add(number)

    def hasFrequency(self, frequency: int) -> bool:
        return self.frequencyMap.get(frequency) is not None


# frequencyTracker = FrequencyTracker()
# assert frequencyTracker.add(5) is None
# assert frequencyTracker.add(5) is None
# assert frequencyTracker.hasFrequency(1) is False
# assert frequencyTracker.hasFrequency(2) is True
# assert frequencyTracker.add(6) is None
# assert frequencyTracker.add(5) is None
# assert frequencyTracker.add(1) is None

frequencyTracker = FrequencyTracker()
assert frequencyTracker.deleteOne(9) is None
assert frequencyTracker.deleteOne(8) is None
assert frequencyTracker.deleteOne(1) is None
assert frequencyTracker.deleteOne(4) is None
assert frequencyTracker.hasFrequency(1) is False

assert frequencyTracker.add(10) is None
assert frequencyTracker.deleteOne(5) is None
assert frequencyTracker.hasFrequency(1) is True
assert frequencyTracker.deleteOne(10) is None
assert frequencyTracker.deleteOne(9) is None

assert frequencyTracker.deleteOne(10) is None
assert frequencyTracker.hasFrequency(1) is False
assert frequencyTracker.add(4) is None
assert frequencyTracker.hasFrequency(1) is True
assert frequencyTracker.deleteOne(4) is None

assert frequencyTracker.hasFrequency(1) is False
assert frequencyTracker.hasFrequency(1) is False
assert frequencyTracker.add(10) is None
assert frequencyTracker.hasFrequency(1) is True
assert frequencyTracker.add(2) is None

assert frequencyTracker.deleteOne(1) is None
assert frequencyTracker.hasFrequency(2) is False
assert frequencyTracker.add(7) is None
assert frequencyTracker.hasFrequency(1) is True
assert frequencyTracker.hasFrequency(1) is True
assert frequencyTracker.add(6) is None
