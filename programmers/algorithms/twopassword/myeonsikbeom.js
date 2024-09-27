/*문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/155652*/
function solution(s, skip, index) {
  let answer = ''
  for (let i = 0; i < s.length; i++) {
    let step = 0
    let charASCII = s[i].charCodeAt()
    while (step < index) {
      charASCII += 1
      if (charASCII > 'z'.charCodeAt()) {
        charASCII = 97
      }
      if (skip.indexOf(String.fromCharCode(charASCII)) === -1) {
        step++
      }
    }
    answer += String.fromCharCode(charASCII)
  }
  return answer
}
