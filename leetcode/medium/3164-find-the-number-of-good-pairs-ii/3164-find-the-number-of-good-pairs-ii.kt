// 3164-find-the-number-of-good-pairs-ii
// URL: https://leetcode.com/problems/find-the-number-of-good-pairs-ii/description/


class Solution {
    fun getFactors(num: Int): List<Int> {
        val factors = mutableListOf<Int>()

        for (i in 1..Math.sqrt(num.toDouble()).toInt()) {
            if (num % i == 0) {
                factors.add(i)
                if (i != num / i) {
                    factors.add(num / i)
                }
            }
        }

        return factors
    }

    fun numberOfPairs(nums1: IntArray, nums2: IntArray, k: Int): Long {
        // define hash and put nums2 with count
        val hash = mutableMapOf<Int, Int>()
        var cachedResult = mutableMapOf<Int, Long>()

        nums2.forEach { num ->
            hash[num * k] = hash.getOrDefault(num * k, 0) + 1
        }

        // result will be number of fair array
        var result = 0L

        // iterate nums1 and find factor and if factor exist in hash then add result index
        for (num in nums1) {
            if (cachedResult.containsKey(num)) {
                cachedResult[num]?.let { cache ->
                    result += cache
                }
                continue
            }

            val factors = getFactors(num)

            factors.forEach { factor ->
                if (hash.containsKey(factor)) {
                    hash[factor]?.let { count ->
                        result += count.toLong()
                        cachedResult[num] = cachedResult.getOrDefault(num, 0) + count.toLong()
                    }
                }
            }
        }

        return result
    }
}
