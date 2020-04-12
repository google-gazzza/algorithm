/**
  * https://app.codility.com/c/run/trainingXT5PSE-ZZ2/
  *
  * Task Score  : 25%
  * Correctness : 25%
  */
object Solution {
  def solution(a: Array[Int], k: Int): Array[Int] = {
    val aSize = a.length
    if (aSize == k) return a
    a.slice(k-1, aSize) ++ a.slice(0, k-1)
  }
}