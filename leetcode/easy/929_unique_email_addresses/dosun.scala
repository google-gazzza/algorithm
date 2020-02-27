/**
  * https://leetcode.com/problems/unique-email-addresses/
  * 
  * Runtime: 624 ms, faster than 40.00% of Scala online submissions for Unique Email Addresses.
  * Memory Usage: 53.4 MB, less than 100.00% of Scala online submissions for Unique Email Addresses.
  */
object Solution {
    def numUniqueEmails(emails: Array[String]): Int = {
        val filteredUniqueEmails = emails.map(e => {
            val separated = e.split("@")
            val name      = separated(0).replaceAll("(\\.)|(\\+.*)", "")
            val domain    = separated(1)
            name + "@" + domain
        }).distinct
        
        filteredUniqueEmails.size
    }
}

