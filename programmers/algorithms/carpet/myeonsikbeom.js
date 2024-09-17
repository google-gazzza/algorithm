//문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/42842
function solution(brown, yellow) {
  //height는 최소 3
  let width = brown / 2 - 1
  let height = 3
  let yellow_width = width - 2
  let yellow_height = height - 2
  while (width >= height) {
    if (yellow_width * yellow_height === yellow) {
      return [width, height]
    }
    width -= 1
    height += 1
    yellow_width = width - 2
    yellow_height = height - 2
  }

  return [width, height]
}
