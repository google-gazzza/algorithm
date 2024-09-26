// range-extraction
// range extraction
// difficulty: 4kyu
// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/

function solution(list) {
  let result = [];
  let queue = [list[0]];
  
  function flush() {
    if (queue.length > 2) {
      result.push(`${queue.shift()}-${queue.pop()}`);
    } else {
      result = result.concat(queue);
    }
    queue = [];
  }
  
  for (let i = 1; i < list.length; i += 1) {
    if ((list[i - 1] + 1) !== list[i]) {
      flush();
    }
    queue.push(list[i]);
  }
  flush();
  
  return result.join(',');
}


console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), '-6,-3-1,3-5,7-11,14,15,17-20');
//?
console.log(solution([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20]));
// '-3--1,2,10,15,16,18-20
