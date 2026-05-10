// [JS][7kyu] Sort Santa's Reindeer
// sort-santa-s-reindeer
// https://www.codewars.com/kata/52ab60b122e82a6375000bad/train/javascript

const sortReindeer = (reindeerNames) => {
  reindeerNames.sort((a, b) => {
    const lastNameOfA = a.split(' ')[1]
    const lastNameOfB = b.split(' ')[1]
    return lastNameOfA.localeCompare(lastNameOfB)
  })

  return reindeerNames
}

const arr = ['Dasher Tonoyan', 'Dancer Moore', 'Prancer Chua', 'Vixen Hall', 'Comet Karavani', 'Cupid Foroutan', 'Donder Jonker', 'Blitzen Claus']

sortReindeer(arr)
