/*문제설명:https://school.programmers.co.kr/learn/courses/30/lessons/142086*/
function solution(s) {
  var answer = [];
  const indexObj = {};
  return s.split("").map((str, i) => {
    if (indexObj[str] == undefined) {
      indexObj[str] = -1;
      return -1;
    } else {
      const substr = s.substring(0, i + 1);

      let index = substr.lastIndexOf(str) - 1;
      let step = 1;
      //console.log(index,substr);
      while (substr[index] !== str) {
        step++;
        index--;
      }
      return step;
    }
  });
}
