// 2917-find-the-k-or-of-an-array
// URL: https://leetcode.com/problems/find-the-k-or-of-an-array/description/

class Solution {
    fun bitArrayToInt(bitArray: IntArray): Int {
        require(bitArray.size == 32) { "Bit array must be of length 32" }

        var result = 0
        for (i in bitArray.indices) {
            result = (result shl 1) or bitArray[i]
        }
        return result
    }

    fun integerToBitArray(integer: Int): IntArray {
        var bitArray = IntArray(32)

        for (i in 0..31) {
            bitArray[i] = (integer shr i) and 1
        }

        return bitArray
    }

    fun findKOr(nums: IntArray, k: Int): Int {
        var bitArray = IntArray(32)

        for (num in nums) {
            var bitNum = integerToBitArray(num)
            for (i in 0..31) {
                bitArray[i] += bitNum[i]
            }
        }

        for (i in 0..31) {
            if (bitArray[i] >= k) {
                bitArray[i] = 1
            } else {
                bitArray[i] = 0
            }
        }

        return bitArrayToInt(bitArray)
    }
}
