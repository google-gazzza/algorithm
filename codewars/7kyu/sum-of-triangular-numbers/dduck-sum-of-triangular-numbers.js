// sum-of-triangular-numbers
// Sum of Triangular Numbers
// https://www.codewars.com/kata/580878d5d27b84b64c000b51
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/sum-of-triangular-numbers

const sumTriangularNumbers = (n, count = 1, previousEndNum = 0, sum = 0) => {
  return count <= n ? sumTriangularNumbers(
    n,
    count + 1,
    previousEndNum + count,
    sum + previousEndNum + count
  ) : sum;
};



console.log(sumTriangularNumbers(6), 56);
console.log(sumTriangularNumbers(34), 7140);
console.log(sumTriangularNumbers(-291), 0);
console.log(sumTriangularNumbers(943), 140205240);
console.log(sumTriangularNumbers(-971), 0);
