https://leetcode.com/problems/two-sum/
Runtime: 32 ms, faster than 95.20% of Swift online submissions for Two Sum.
Memory Usage: 20.9 MB, less than 5.88% of Swift online submissions for Two Sum.

class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var dic = [Int: Int]()

        for index in 0..<nums.count {
            let val = nums[index]
            if let before = dic[target - val] {
                return [before, index]
            }

            dic[val] = index
        }

        return [0, 0]
    }
}