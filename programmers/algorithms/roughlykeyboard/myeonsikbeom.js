/**문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/160586*/
function solution(keymap, targets) {
  const answer = new Array(targets.length).fill(0)
  for (let i = 0; i < targets.length; i++) {
    const target = targets[i]
    for (let j = 0; j < target.length; j++) {
      const keyIndex = keymap.map((key) => (key.indexOf(target[j]) === -1 ? -1 : key.indexOf(target[j]) + 1)).filter((k) => k >= 0)
      if (keyIndex.length === 0) {
        answer[i] = -1
        break
      }
      answer[i] += Math.min(...keyIndex)
    }
  }
  return answer
}
