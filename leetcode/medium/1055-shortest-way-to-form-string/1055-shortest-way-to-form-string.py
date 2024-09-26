class Solution:
    def shortestWay(self, source: str, target: str) -> int:
        repeatCount = 0
        sourceIndex = 0
        sourceLength = len(source)

        for targetChar in target:
            found = False

            for i in range(sourceIndex, sourceIndex + sourceLength):
                if (i % sourceLength) == 0:
                    repeatCount += 1

                if source[i % sourceLength] == targetChar:
                    sourceIndex = i + 1
                    found = True
                    break

            if not found:
                return -1

        return repeatCount
