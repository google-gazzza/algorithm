/**
  * https://leetcode.com/problems/defanging-an-ip-address/
  * 
  * Runtime: 432 ms, faster than 27.84% of Scala online submissions for Defanging an IP Address.
  * Memory Usage: 54.5 MB, less than 100.00% of Scala online submissions for Defanging an IP Address.
  */
object Solution {
    def defangIPaddr(address: String): String = {
        var result = ""
        address.foreach { c =>
          if (c == '.') {
            result += "[.]"
          } else {
            result += c
          }
        }
        result
    }
}
