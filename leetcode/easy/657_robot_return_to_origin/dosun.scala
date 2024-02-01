/**
  * https://leetcode.com/problems/robot-return-to-origin/
  *
  * Runtime: 508 ms, faster than 23.08% of Scala online submissions for Robot Return to Origin.
  * Memory Usage: 52.1 MB, less than 100.00% of Scala online submissions for Robot Return to Origin.
  */
object Solution {
  def judgeCircle(moves: String): Boolean = {
    var x = 0
    var y = 0
    moves.foreach {
      case 'U' => y += 1
      case 'D' => y -= 1
      case 'R' => x += 1
      case 'L' => x -= 1
    }
    x == 0 && y == 0
  }
}