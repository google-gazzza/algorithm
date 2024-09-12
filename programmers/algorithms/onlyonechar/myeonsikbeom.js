/*문제:https://school.programmers.co.kr/learn/courses/30/lessons/120896*/
function solution(s) {
  const compressStr = Array.from(new Set(Array.from(s))).sort(
    (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  );
  return compressStr
    .filter((str) => s.match(new RegExp(str, "gi")).length === 1)
    .join("");
}
