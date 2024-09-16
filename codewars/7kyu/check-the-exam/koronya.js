// [JS][7kyu] Check the exam
// check-the-exam
// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

const checkExam = (array1, array2) => {
  const candidate = array2.reduce((acc, cur, index) => acc + (cur === array1[index] ? 4 : cur === '' ? 0 : -1), 0)
  return candidate > 0 ? candidate : 0
}

checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd'])
checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', ''])
checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c'])
checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c'])
