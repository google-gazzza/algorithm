// [JS][8kyu] Student's Final Grade
// student-s-final-grade
// https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript

const finalGrade = (exam, projects) => {
  if (exam > 90) {
    return 100
  }
  if (projects > 10) {
    return 100
  }
  if (exam > 75 && projects >= 5) {
    return 90
  }
  if (exam > 50 && projects >= 2) {
    return 75
  }

  return 0
}

finalGrade(100, 12)
finalGrade(99, 0)
finalGrade(100, 15)

finalGrade(85, 5)

finalGrade(55, 3)

finalGrade(55, 0)
finalGrade(20, 2)
