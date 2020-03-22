// https://leetcode.com/problems/roman-to-integer/submissions/
// Runtime: 220 ms, faster than 51.06% of Kotlin online submissions for Roman to Integer.
// Memory Usage: 35.9 MB, less than 100.00% of Kotlin online submissions for Roman to Integer.
class RomanToInteger {

    fun romanToInt(s: String): Int {
        val lastIndex = s.length - 1
        return s.toCharArray()
            .mapIndexed { index, it -> convertTo(it, if (index == lastIndex) null else s[index + 1]) }
            .sum()
    }

    private fun convertTo(current: Char, nextAlphabet: Char?): Int {
        val num = match(current)
        val maybeNext = nextAlphabet?.let { match(it) } ?: 0

        return if(num < maybeNext) num * -1 else num
    }

    private fun match(current: Char): Int {
        return when (current) {
            'I' -> 1
            'V' -> 5
            'X' -> 10
            'L' -> 50
            'C' -> 100
            'D' -> 500
            'M' -> 1000
            else -> 0
        }
    }
}