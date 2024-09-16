/*문제: https://school.programmers.co.kr/learn/courses/30/lessons/12948*/
function solution(phone_number) {
  const len = phone_number.length;
  //return `${'*'.repeat(len-4)}${phone_number.substring(len-4)}`;
  //or
  return `${"*".repeat(len - 4)}${phone_number.slice(-4)}`;
}
