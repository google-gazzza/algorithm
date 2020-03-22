/**
  * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
  * 
  * Runtime: 392 ms, faster than 60.00% of Scala online submissions for Number of Steps to Reduce a Number to Zero.
  * Memory Usage: 53.5 MB, less than 100.00% of Scala online submissions for Number of Steps to Reduce a Number to Zero.
  */
  object Solution {
    def numberOfSteps (num: Int): Int = {
        var currentNum = num
        var steps = 0
        while (currentNum != 0) {
          if (currentNum % 2 == 0){
            currentNum = currentNum / 2
          }  else {
            currentNum = currentNum - 1
          }
          steps += 1
        }
        steps
    }
}
