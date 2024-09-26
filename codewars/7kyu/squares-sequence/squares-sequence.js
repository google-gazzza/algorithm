/*
squares-sequence

# Squares sequence

difficulty: 7kyu
URL: https://www.codewars.com/kata/5546180ca783b6d2d5000062

<br>

## Approach

<br>

### en

1. if n <= 0 return empty array
2. generate empty array as much as length that (n-1)
3. fill with that array with 0 for iteration
4. and reducing array with initialize value [x]
that's why we just create (n-1)array at process-2
and while reducing(iterating) push (last element of array ^ 2) n-1 times

<br>

### kr

1. 만약 n <= 0 일 경우에 빈 어레이를 리턴합니다.
2. 빈 배열을 (n-1)만큼 생성합니다
3. 위에 생성한 배열을 이터레이션 하기위해 0으로  초기화 합니다.
4. 그리고 리듀싱을 하는데 초기 값은 [x]로 설정합니다.
초기 값때문에 프로세스-2에서 배열을 (n-1)만큼 생성 한 것이고
리듀싱 하는동안 (어레이의 마지막 엘레먼트 ^ 2)값을 (n-1)만큼 배열에 추가합니다.

 */

const squares = (x, n) => {
  if (n <= 0) {
    return [];
  }
  
  return new Array(n - 1).fill(0)
    .reduce((acc) => {
      acc.push(acc.slice(-1) ** 2);
      return acc;
    }, [x]);
};

console.log(squares(2, 5), [2, 4, 16, 256, 65536]);
console.log(squares(3, 3), [3, 9, 81]);
console.log(squares(5, 3), [5, 25, 625]);
console.log(squares(10, 4), [10, 100, 10000, 100000000]);
