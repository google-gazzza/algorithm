class Solution {
    fun sumOfTheDigitsOfHarshadNumber(x: Int): Int {
        x.toString().map {
            it.toString().toInt()
        }.sum().let {
            return if (x % it == 0) it else -1
        }
    }
}
