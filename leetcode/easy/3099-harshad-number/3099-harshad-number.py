class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
        digitSum = sum([int(d) for d in str(x)])

        return digitSum if x % digitSum == 0 else -1
