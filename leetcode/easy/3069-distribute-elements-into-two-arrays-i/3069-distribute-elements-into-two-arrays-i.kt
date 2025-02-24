class Solution {
    fun resultArray(nums: IntArray): IntArray {
        val arr1 = mutableListOf<Int>()
        val arr2 = mutableListOf<Int>()

        arr1.add(nums[0])
        arr2.add(nums[1])

        for (i in 2 until nums.size) {
            if (arr1.last() > arr2.last()) {
                arr1.add(nums[i])
            } else {
                arr2.add(nums[i])
            }
        }

        return (arr1 + arr2).toIntArray()
    }
}
