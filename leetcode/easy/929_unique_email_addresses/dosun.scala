/**
  * https://leetcode.com/problems/unique-email-addresses/
  * 
  * Runtime: 596 ms, faster than 60.00% of Scala online submissions for Unique Email Addresses.
  * Memory Usage: 52.9 MB, less than 100.00% of Scala online submissions for Unique Email Addresses.
  */
object Solution {
    def numUniqueEmails(emails: Array[String]): Int = {
        val at   = "@"
        val plus = "+"
        val dot  = "."

        val withoutDots = emails.map(e => {
            val atIndex = e.indexOf(at)
            val name    = e.substring(0, atIndex).replace(dot, "")
            val domain  = e.substring(atIndex)
            name + domain
        })

        val uniques = withoutDots.map { e => e match {
            case x if x.contains(plus) => {
              val ignoredName = e.substring(e.indexOf(plus), e.indexOf(at))
              e.replace(ignoredName, "")
            }
            case _ => e
        }}.distinct

        var numUnique = 0
        uniques.foreach(_ => numUnique += 1)
        numUnique
    }
}
