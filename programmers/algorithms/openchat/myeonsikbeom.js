/*문제링크: https://school.programmers.co.kr/learn/courses/30/lessons/42888*/
function solution(record) {
  const answer = []
  const last = {}
  for (let i = 0; i < record.length; i++) {
    const [action, id, nickname] = record[i].split(' ')
    if (nickname) {
      last[id] = nickname
    }
  }
  for (let i = 0; i < record.length; i++) {
    const [action, id] = record[i].split(' ')
    if (action !== 'Change') {
      answer.push(`${last[id]}님이 ${action === 'Enter' ? '들어왔습니다' : '나갔습니다'}.`)
    }
  }
  return answer
}
