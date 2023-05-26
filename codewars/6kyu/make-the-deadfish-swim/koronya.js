// [JS][6kyu] Make the Deadfish Swim
// make-the-deadfish-swim
// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/c

// Return the output array, and ignore all non-op characters
const parse = (data) => {
  const resultArr = []
  let target = 0
  for (const str of data) {
    switch (str) {
      case 'i':
        target += 1
        break
      case 'd':
        target -= 1
        break
      case 's':
        target *= target
        break
      case 'o':
        resultArr.push(target)
    }
  }

  return resultArr
}

parse('iiisdoso')
parse('iiisxxxdoso')
