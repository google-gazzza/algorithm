class Solution {
    fun minOperations(nums: IntArray, k: Int): Int {
        return nums.size - nums.filter { it >= k }.size
    }
}
