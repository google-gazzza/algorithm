// [JS][7kyu] Suzuki needs help lining up his students!
// suzuki-needs-help-lining-up-his-students
// https://www.codewars.com/kata/5701800886306a876a001031/train/javascript

const lineupStudents = (students) => students.split(' ').sort((a, b) => b.length - a.length || b.localeCompare(a))

const s1 = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'
lineupStudents(s1)

