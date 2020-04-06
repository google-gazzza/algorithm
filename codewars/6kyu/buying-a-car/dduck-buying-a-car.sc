// https://www.codewars.com/kata/554a44516729e4d80b000012

object BuyCar {

  def nbMonths(oldValue: Double,
               newValue: Double,
               savingPerMonth: Int,
               percentLossByMonth: Double,
               month: Int = 1,
               savedMoney: Int = 0): Array[Int] = {
    val totalValue: Double = oldValue + savedMoney

    if (newValue <= totalValue) {
      return Array(month - 1, Math.round(totalValue - newValue).asInstanceOf[Int])
    }

    val lossLate = 1 - (percentLossByMonth + (0.5 * Math.floor(month / 2))) / 100;

    nbMonths(
      oldValue * lossLate,
      newValue * lossLate,
      savingPerMonth,
      percentLossByMonth,
      month + 1,
      savedMoney + savingPerMonth
    )
  }
}

val t0 = System.currentTimeMillis()
println(Array(1, 2).mkString)
println(BuyCar.nbMonths(2000, 8000, 1000, 1.5))
// 6, 766
val t1 = System.currentTimeMillis()
println(s"Completed in ${t1 - t0} ms")
