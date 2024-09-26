// [JS][7kyu] Who is the killer?
// who-is-the-killer
// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript

const isKiller = (dead, suspects) => dead.every((person) => suspects.includes(person) === true)

const killer = (suspectInfo, dead) => {
  let killerName = ''
  Object.entries(suspectInfo).some(([key, value]) => {
    if (isKiller(dead, value) === true) {
      killerName = key
    }
  })

  return killerName
}

killer({ James: ['Jacob', 'Bill', 'Lucas'], Johnny: ['David', 'Kyle', 'Lucas'], Peter: ['Lucy', 'Kyle'] }, ['Lucas', 'Bill'])

killer({ Brad: [], Megan: ['Ben', 'Kevin'], Finn: [] }, ['Ben'])
