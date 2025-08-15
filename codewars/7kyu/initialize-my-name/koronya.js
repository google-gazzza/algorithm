// [JS][7kyu] Initialize my name
// initialize-my-name
// https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript

const initializeNames = (name) => {
  const arr = name.split(' ')
  if (arr.length <= 2) {
    return name
  }
  const first = arr.shift()
  const last = arr.pop()
  const rest = arr.map((name) => name[0] + '.')
  return [first, ...rest, last].join(' ')
}

initializeNames('Dimitri') === 'Dimitri'
initializeNames('Jack Ryan') === 'Jack Ryan'
initializeNames('Lois Mary Lane') === 'Lois M. Lane'
initializeNames('Alice Betty Catherine Davis') === 'Alice B. C. Davis'
