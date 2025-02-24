/*문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/120894*/
function solution(numbers) {
  const numberarr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = numbers;
  for (let i = 0; i < numberarr.length; i++) {
    answer = answer.replace(new RegExp(numberarr[i], "gi"), String(i));
  }
  return parseInt(answer, 10);
}
