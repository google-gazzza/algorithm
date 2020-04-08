/**
  * https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
  *
  * result : https://app.codility.com/demo/results/trainingZVH4DS-6GD/
  * 1. CyclicRotation
  *
  * Task Score :25%
  * Correctness:25%
  * Performance:Not assessed
  */
object Solution {
  def solution(a: Array[Int], k: Int): Array[Int] = {
    val aSize = a.length 
    if (aSize == k) return a
    a.slice(k-1, aSize) ++ a.slice(0, k-1)
  }
}
