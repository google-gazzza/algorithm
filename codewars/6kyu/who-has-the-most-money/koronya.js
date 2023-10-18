// [JS][6kyu] Who has the most money?
// who-has-the-most-money
// https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/javascript

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name
    this.fives = fives
    this.tens = tens
    this.twenties = twenties
  }
}

const mostMoney = (students) => {
  const studentsLen = students.length
  if (studentsLen === 1) {
    return students[0].name
  }
  let max = Number.MIN_SAFE_INTEGER
  const mappedStudents = students.map((student) => {
    const total = student.fives * 5 + student.tens * 10 + student.twenties * 20
    max = Math.max(max, total)
    return [student.name, total]
  })
  const filteredStudents = mappedStudents.filter((student) => student[1] === max)
  if (filteredStudents.length === studentsLen) {
    return 'all'
  }

  return filteredStudents.map((student) => student[0])[0]
}

const andy = new Student('Andy', 0, 0, 2)
const stephen = new Student('Stephen', 0, 4, 0)
const eric = new Student('Eric', 8, 1, 0)
const david = new Student('David', 2, 0, 1)
const phil = new Student('Phil', 0, 2, 1)
const cam = new Student('Cameron', 2, 2, 0)
const geoff = new Student('Geoff', 0, 3, 0)

// "What happens if one student has the most money?"
mostMoney([andy, stephen, eric, david, phil]) === 'Eric'
mostMoney([cam, geoff, andy, stephen, eric, david, phil]) === 'Eric'

// "What happens if there is only one student?"
mostMoney([andy]) === 'Andy'
mostMoney([stephen]) === 'Stephen'

// "What happens if all students have the same amount of money?"
mostMoney([cam, geoff]) === 'all'
mostMoney([david, cam, geoff]) === 'all'
