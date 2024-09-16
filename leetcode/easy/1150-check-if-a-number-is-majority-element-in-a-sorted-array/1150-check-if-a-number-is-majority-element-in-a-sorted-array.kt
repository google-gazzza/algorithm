class Solution {
    fun isMajorityElement(nums: IntArray, target: Int): Boolean {
        var count = 0

        nums.forEach { num ->
            if (num == target) {
                count += 1
            }
        }

        return count > nums.count() / 2
    }
}
