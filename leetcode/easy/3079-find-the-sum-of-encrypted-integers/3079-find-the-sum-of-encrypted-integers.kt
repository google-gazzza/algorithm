class Solution {
    fun sumOfEncryptedInt(nums: IntArray): Int {
        val strNums = nums.map { it.toString().chunked(1) }
        val maxStrs = strNums.map {
            it.max()
                .repeat(it.size)
                .toInt()
        }

        return maxStrs.sum()
    }
}
