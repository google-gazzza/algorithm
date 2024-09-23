// [JS][6kyu] Berlin Clock
// berlin-clock
// https://www.codewars.com/kata/5a1463678ba9145a670000f9/train/javascript

const berlinClock = (time) => {
  const [hours, minutes, seconds] = time.split(':').map(Number)
  const first = Math.floor(hours / 5)
  const second = hours % 5
  const third = Math.floor(minutes / 5)
  const fourth = minutes % 5

  const topRow = seconds % 2 === 0 ? 'Y' : 'O'
  const firstRow = 'R'.repeat(first).padEnd(4, 'O')
  const secondRow = 'R'.repeat(second).padEnd(4, 'O')
  const thirdRow = 'Y'.repeat(third).padEnd(11, 'O').replace(/YYY/g, 'YYR')
  const fourthRow = 'Y'.repeat(fourth).padEnd(4, 'O')

  return `${topRow}\n${firstRow}\n${secondRow}\n${thirdRow}\n${fourthRow}`
}

berlinClock('12:56:01') === 'O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO'

berlinClock('00:00:00') === 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'

berlinClock('22:32:45') === 'O\nRRRR\nRROO\nYYRYYROOOOO\nYYOO'
