/*
pascals-triangle-2

# codewars/6kyu/Pascal's Triangle #2
Difficulty: 6kyu
URL: https://www.codewars.com/kata/52945ce49bb38560fe0001d9
Tags: math

## Approach

### en
It’s about [Pascal’s triangle](https://en.wikipedia.org/wiki/Pascal's_triangle)

The formula is
$$
\begin{pmatrix}n \\ k \end{pmatrix}
=
\begin{pmatrix}n-1 \\ k-1 \end{pmatrix}
+
\begin{pmatrix}n-1 \\ k \end{pmatrix}
$$

### kr
이것은 [파스칼 삼각형](https://en.wikipedia.org/wiki/Pascal's_triangle)에 대한 것입니다.

포뮬라는 아래와 같습니다.
$$
\begin{pmatrix}n \\ k \end{pmatrix}
=
\begin{pmatrix}n-1 \\ k-1 \end{pmatrix}
+
\begin{pmatrix}n-1 \\ k \end{pmatrix}
$$

## Solution
### JavaScript
*/

const pascal = (depth) => new Array(depth).fill(0)
  .map((e, n, arr) => {
    arr[n] = new Array(n + 1).fill(1)
      .map((e2, k, arr2) => {
        if (n === 0 || k === 0 || k === arr2.length - 1) {
          return 1;
        }
        return ((arr[n - 1][k - 1] || 0) + arr[n - 1][k]) || 0;
      });
    return arr[n];
  });

// test
console.log(pascal(1), [[1]]);
console.log(pascal(3));
console.log(pascal(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
