object dosun {
  def repeatedSubstringPattern(s: String): Boolean = {
    if (s.length < 2) return false

    val substr = new StringBuilder
    for (i <- 0 to s.length / 2) {
      println(i)

    }
//      while ( {
//        i < string.length / 2
//      }) {
//        substr.append(string.charAt(i))
//        val clearedFromSubstrings = string.replaceAll(substr.toString, "")
//        if (clearedFromSubstrings.length == 0) return true
//
//        {
//          i += 1; i - 1
//        }
//      }
  }

  def main(args: Array[String]): Unit = {
    val string = "abab"
    repeatedSubstringPattern(string)

  }
}