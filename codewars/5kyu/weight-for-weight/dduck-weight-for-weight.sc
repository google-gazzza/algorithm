// https://www.codewars.com/kata/55c6126177c9441a570000cc/

object WeightSort {
  val getWeight = (str: String) => str.split("").map((v: String) => v.toInt).reduce((x: Int, y: Int) => x + y)

  def orderWeight(string: String): String = {
    string.split(" ").sortWith((a: String, b: String) => {
      val weightA = WeightSort.getWeight(a)
      val weightB = WeightSort.getWeight(b)
      if (weightA == weightB) b > a else weightB > weightA
    }).mkString(" ")
  }
}

println(WeightSort.orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
println(WeightSort.orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
println(WeightSort.orderWeight(""), "")

// best practice in codewars
//object WeightSort {
//
//  def orderWeight(str: String): String =
//    str.split(" ").sortBy(d => (d.map(_.asDigit).sum, d)).mkString(" ")
//}
