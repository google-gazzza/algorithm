// [JS][7kyu] Sort the climbing grades
// sort-the-climbing-grades
// https://www.codewars.com/kata/58a08e622e7fb654a300000e/train/javascript

const getGrade = (str) => {
  if (str === 'VB') {
    return 0
  } else if (str === 'V0') {
    return 1
  } else if (str === 'V0+') {
    return 2
  }
  return Number(str.slice(1)) + 2
}

const sortGrades = (lst) => {
  lst.sort((a, b) => getGrade(a) - getGrade(b))
  return lst
}

sortGrades(['V7', 'V12', 'V1'])
sortGrades(['V13', 'V14', 'VB', 'V0'])
sortGrades(['V0+', 'V0', 'V16', 'V2', 'VB', 'V6'])
sortGrades(['V7'])
sortGrades([])
