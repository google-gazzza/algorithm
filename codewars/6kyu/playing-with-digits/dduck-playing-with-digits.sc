// Playing with digits
// https://www.codewars.com/kata/5552101f47fc5178b1000050

object DigPow {

  def digPow(n: Int, p: Int): Int = {
    var sum: Double = 0
    for ((v, i) <- n.toString.zipWithIndex) {
      sum += Math.pow(v.asDigit, (i + p))
    }

    if ((sum % n) == 0.0) (sum / n).toInt else -1
  }
}

println(DigPow.digPow(89, 1), 1)
println(DigPow.digPow(92, 1), -1)
println(DigPow.digPow(695, 2), 2)
println(DigPow.digPow(46288, 3), 51)

