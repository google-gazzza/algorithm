/**문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/159994*/
function solution(cards1, cards2, goal) {
  let answer = 'Yes'
  let turn = 1
  for (let i = 0; i < goal.length; i++) {
    const _card1 = [...cards1]
    const _card2 = [...cards2]
    if (goal[i] === _card1.shift()) {
      cards1 = [..._card1]
    } else if (goal[i] === _card2.shift()) {
      cards2 = [..._card2]
    } else {
      answer = 'No'
      break
    }
  }
  return answer
}
