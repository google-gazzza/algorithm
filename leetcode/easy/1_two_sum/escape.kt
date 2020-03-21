// https://leetcode.com/problems/two-sum/submissions/
// Runtime: 132 ms, faster than 99.47% of Kotlin online submissions for Two Sum.
// Memory Usage: 42.3 MB, less than 9.09% of Kotlin online submissions for Two Sum.
class TwoSum {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        var history = mutableMapOf<Int, Int>()

        nums.forEachIndexed { index, num ->
            if ( history.containsKey(target - num) )
                return intArrayOf( history[target - num]!!, index )

            history[num] = index
        }

        return intArrayOf()
    }
}

// 메모리를 덜 써서 나을줄 알았는데 망한 케이스
// https://leetcode.com/problems/two-sum/submissions/
// Runtime: 232 ms, faster than 37.93% of Kotlin online submissions for Two Sum.
// Memory Usage: 47.1 MB, less than 9.09% of Kotlin online submissions for Two Sum.
//class Solution {
//    fun twoSum(nums: IntArray, target: Int): IntArray {
//        nums.forEachIndexed { index, num ->
//            run loop@{
//                if (nums.contains(target - num)) {
//                    val searchedIndex = nums.lastIndexOf(target - num)
//
//                    if (searchedIndex == index)
//                        return@loop
//
//                    return intArrayOf(index, searchedIndex)
//                }
//            }
//        }
//        return intArrayOf()
//    }
//}