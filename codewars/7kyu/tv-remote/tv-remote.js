/*
tv-remote

# TV Remote
difficulty: 7kyu
URL: https://www.codewars.com/kata/5a5032f4fd56cb958e00007a

<br><br>

## Approach

<br>

### en

this problem is about to calculate array distance
there is two way to solve.
1.naive solution - iterate every array and get index 'i, j' and compare 'i, j'
2.pre-define all array as map. e.g {a:(0,0), b:(1,0) ... 3:{7,0)}
then lookup speed will O(1)

solve with the predefined solution
1.split words to charactor
2.iterate every character of words
  2-1 while iterate get index from predefined map
3.reduce process_2-1 result and calculate distance
(Max(acc.x,cur.x) - Min(acc.x,cur.x)) + (Max(acc.y,cur.y) - Min(acc.y,cur.y))

<br>

### kr

이 문제는 배열 간격을 구하는 문제입니다.
두가지 방법으로 풀 수 있습니다.
1.순진한방법 - 모든 어레이를 돌면서 'i, j'인덱스를 얻고, 이것을 비교합니다.
2.사전에 모든 어레이를 맵으로 정의합니다. e.g {a:(0,0), b:(1,0) ... 3:{7,0)}
이렇게 하면 인덱스를 O(1)의 속도로 얻을수 있습니다.

<br><br>

pre-defined 방법으로 풀기
1.스트링을 각 문자로 split합니다
2.모든 캐릭터를 이터레이션 합니다
 2-1 이터레이션 하는동안 remote 맵에서 인덱스를 찾아서 반환합니다.
3.process_2-1을 reduce하여 거리의 합계를 구합니다.
(Max(acc.x,cur.x) - Min(acc.x,cur.x)) + (Max(acc.y,cur.y) - Min(acc.y,cur.y))

## solution

 */

const remote = {
  'a': [0, 0],
  'b': [0, 1],
  'c': [0, 2],
  'd': [0, 3],
  'e': [0, 4],
  '1': [0, 5],
  '2': [0, 6],
  '3': [0, 7],
  'f': [1, 0],
  'g': [1, 1],
  'h': [1, 2],
  'i': [1, 3],
  'j': [1, 4],
  '4': [1, 5],
  '5': [1, 6],
  '6': [1, 7],
  'k': [2, 0],
  'l': [2, 1],
  'm': [2, 2],
  'n': [2, 3],
  'o': [2, 4],
  '7': [2, 5],
  '8': [2, 6],
  '9': [2, 7],
  'p': [3, 0],
  'q': [3, 1],
  'r': [3, 2],
  's': [3, 3],
  't': [3, 4],
  '.': [3, 5],
  '@': [3, 6],
  '0': [3, 7],
  'u': [4, 0],
  'v': [4, 1],
  'w': [4, 2],
  'x': [4, 3],
  'y': [4, 4],
  'z': [4, 5],
  '_': [4, 6],
  '/': [4, 7],
};

const tvRemote = function (word) {
  return [[0, 0]].concat([...word].map((e) => remote[e]))
    .map((e, i, arr) => {
      const [x1, y1] = [...e];
      const [x2, y2] = arr[i + 1] || arr[i];
      const xDistance = (Math.max(x1, x2) - Math.min(x1, x2));
      const yDistance = (Math.max(y1, y2) - Math.min(y1, y2));
      return xDistance + yDistance;
    })
    .reduce((acc, cur) => acc + cur) + word.length;
};

// test
console.log(tvRemote('codewars'), 36);
console.log(tvRemote('does'), 16);
console.log(tvRemote('your'), 23);
console.log(tvRemote('solution'), 33);
console.log(tvRemote('work'), 20);
console.log(tvRemote('for'), 12);
console.log(tvRemote('these'), 27);
console.log(tvRemote('words'), 25);
