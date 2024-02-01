// https://www.codewars.com/kata/5264d2b162488dc400000001/

object Codewars {
  def spinWords(sentence: String): String = {
    sentence.split(" ")
      .map((v: String) => if (v.length() > 4) v.split("").reverse.mkString("") else v)
      .mkString(" ")
  }
}

println("emocleW", Codewars.spinWords("Welcome"))
println("Hey wollef sroirraw", Codewars.spinWords("Hey fellow warriors"))
println("This is a test", Codewars.spinWords("This is a test"))
println("This is rehtona test", Codewars.spinWords("This is another test"))
println("You are tsomla to the last test", Codewars.spinWords("You are almost to the last test"))
println("Just gniddik ereht is llits one more", Codewars.spinWords("Just kidding there is still one more"))
println("ylsuoireS this is the last one", Codewars.spinWords("Seriously this is the last one"))
