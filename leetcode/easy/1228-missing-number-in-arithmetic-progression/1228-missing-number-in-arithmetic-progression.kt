class Solution {
    fun missingNumber(arr: IntArray): Int {
        val diff = (arr[arr.size - 1] - arr[0]) / arr.size

        for (i in 1 until arr.size) {
            if (arr[i] - arr[i - 1] != diff) {
                return arr[i - 1] + diff
            }
        }

        return arr[0]
    }
}
