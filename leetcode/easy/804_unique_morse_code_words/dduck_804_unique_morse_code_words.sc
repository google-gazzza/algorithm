// Runtime: 472 ms, faster than 40.00% of Scala online submissions for Unique Morse Code Words.
//Memory Usage: 52.3 MB, less than 100.00% of Scala online submissions for Unique Morse Code Words.

object Solution {
  val morseMap = Map(
    'a' -> ".-",
    'b' -> "-...",
    'c' -> "-.-.",
    'd' -> "-..",
    'e' -> ".",
    'f' -> "..-.",
    'g' -> "--.",
    'h' -> "....",
    'i' -> "..",
    'j' -> ".---",
    'k' -> "-.-",
    'l' -> ".-..",
    'm' -> "--",
    'n' -> "-.",
    'o' -> "---",
    'p' -> ".--.",
    'q' -> "--.-",
    'r' -> ".-.",
    's' -> "...",
    't' -> "-",
    'u' -> "..-",
    'v' -> "...-",
    'w' -> ".--",
    'x' -> "-..-",
    'y' -> "-.--",
    'z' -> "--.."
  )
  
  def uniqueMorseRepresentations(words: Array[String]): Int = {
    words.map((word: String) => {
      word.map((v: Char) => morseMap(v)).mkString
    }).distinct.size
    
  }
  
  def uniqueMorseRepresentations2(words: Array[String]): Int = {
    val set = scala.collection.mutable.Set[String]()
    words.foreach((word: String) => {
      set += word.map((v: Char) => morseMap(v)).mkString
    })
    set.size
  }
}


val t0 = System.currentTimeMillis()
println(Solution.uniqueMorseRepresentations(Array("gin", "zen", "gig", "msg")))
val t1 = System.currentTimeMillis()
println(s"Completed in ${t1 - t0} ms")

// completed in 4 ms
// completed in 5 ms
