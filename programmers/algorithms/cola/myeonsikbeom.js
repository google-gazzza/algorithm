/** 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/132267 */
function solution(a, b, n) {
  let answer = 0
  while (n >= a) {
    let cola = Math.floor(n / a) * b
    let rest = n % a

    answer += cola
    n = cola + rest
  }
  return answer
}
