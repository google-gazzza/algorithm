class Solution {
    fun addedInteger(nums1: IntArray, nums2: IntArray): Int {
        return nums2.min() - nums1.min()
    }
}
