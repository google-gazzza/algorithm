/**문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/42747 */
function solution(citations) {
  citations.sort((a, b) => b - a);
  let answer = 0;

  for (let i = 0; i <= citations.length; i++) {
    const maxH = citations.filter((ci) => ci >= i).length;
    if (i >= maxH) {
      return maxH;
    }
  }
  return answer;
}
