// check-the-exam
// Check the exam
// difficulty: 8kyu
// https://www.codewars.com/kata/5a3dd29055519e23ec000074/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/check-the-exam

const checkExam = (array1, array2) => Math.max(
  array1.reduce((acc, cur, i) => {
    if (cur === array2[i]) {
      return acc + 4;
    }
    if (!array2[i]) {
      return acc;
    }
    return acc - 1;
  }, 0),
  0,
);



console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);
