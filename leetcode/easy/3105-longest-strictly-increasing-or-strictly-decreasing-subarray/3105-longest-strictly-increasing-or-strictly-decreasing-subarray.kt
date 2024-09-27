// 3105-longest-strictly-increasing-or-strictly-decreasing-subarray
// URL: https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/description/


class Solution {
    fun max(nums: IntArray): Int {
        var maxValue = nums[0]

        for (i in 1 until nums.size) {
            if (nums[i] > maxValue) {
                maxValue = nums[i]
            }
        }

        return maxValue
    }

    fun longestMonotonicSubarray(nums: IntArray): Int {
        var longestMonotonicSubarrayLength = 1
        var increaseConsecutiveCount = 1
        var decreaseConsecutiveCount = 1

        for (i in 1 until nums.size) {
            if (nums[i] > nums[i - 1]) {
                increaseConsecutiveCount++
                decreaseConsecutiveCount = 1
            } else if (nums[i] < nums[i - 1]) {
                decreaseConsecutiveCount++
                increaseConsecutiveCount = 1
            } else {
                increaseConsecutiveCount = 1
                decreaseConsecutiveCount = 1
            }

            longestMonotonicSubarrayLength = max(
                intArrayOf(longestMonotonicSubarrayLength, increaseConsecutiveCount, decreaseConsecutiveCount)
            )
        }

        return longestMonotonicSubarrayLength
    }
}

//// NOTE: Naive Solution
//class Solution {
//    fun getMaximumMonotonousSubarrayLength(nums: IntArray): Int {
//        var maxMonotonousSubarrayLength = 1
//        var currentMonotonousSubarrayLength = 1
//
//        for (i in 1 until nums.size) {
//            if (nums[i] > nums[i - 1]) {
//                currentMonotonousSubarrayLength++
//            } else {
//                maxMonotonousSubarrayLength = max(
//                    maxMonotonousSubarrayLength, currentMonotonousSubarrayLength
//                )
//                currentMonotonousSubarrayLength = 1
//            }
//        }
//
//        return max(maxMonotonousSubarrayLength, currentMonotonousSubarrayLength)
//    }
//
//    fun reverseArray(nums: IntArray): IntArray {
//        val reversedArray = IntArray(nums.size)
//
//        for (i in nums.indices) {
//            reversedArray[i] = nums[nums.size - i - 1]
//        }
//
//        return reversedArray
//    }
//
//    fun max(a: Int, b: Int): Int {
//        return if (a > b) a else b
//    }
//
//    fun longestMonotonicSubarray(nums: IntArray): Int {
//        return max(
//            getMaximumMonotonousSubarrayLength(nums), getMaximumMonotonousSubarrayLength(
//                reverseArray(nums),
//            )
//        )
//    }
//}
