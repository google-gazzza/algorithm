import re


class StringIterator:

    def __init__(self, compressedString: str):
        self.currentChar = ''
        self.currentCount = 0
        self.compressedList = StringIterator.parse_string(compressedString)

    def parse_string(string):
        regex = r'\d+|[a-zA-Z]'
        matches = re.findall(regex, string)
        result = []

        for i in range(0, len(matches), 2):
            word = matches[i]
            number_str = matches[i + 1] if i + 1 < len(matches) else None
            if number_str:
                number = int(number_str)
            result.append([word, number])

        return result

    def moveToNext(self):
        self.currentChar, self.currentCount = self.compressedList.pop(0)

    def next(self) -> str:
        if not self.hasNext():
            return ' '
        if self.currentCount == 0:
            self.moveToNext()

        self.currentCount -= 1

        print(self.currentChar, self.currentCount)
        print(self.compressedList)

        return self.currentChar

    def hasNext(self) -> bool:
        if self.currentCount == 0 and len(self.compressedList) == 0:
            return False

        return True

# Your StringIterator object will be instantiated and called as such:
# obj = StringIterator(compressedString)
# param_1 = obj.next()
# param_2 = obj.hasNext()
