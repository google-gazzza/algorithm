/**
  * https://leetcode.com/problems/intersection-of-two-arrays/
  *
  * Runtime: 512 ms, faster than 31.25% of Scala online submissions for Intersection of Two Arrays.
  * Memory Usage: 53.2 MB, less than 100.00% of Scala online submissions for Intersection of Two Arrays.
  *
  */
  object Solution {
    def intersection(nums1: Array[Int], nums2: Array[Int]): Array[Int] = {
        nums1.intersect(nums2).distinct
    }
}
