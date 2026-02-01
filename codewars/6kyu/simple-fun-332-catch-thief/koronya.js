// [JS][6kyu] Simple Fun #332: Catch Thief
// simple-fun-332-catch-thief
// https://www.codewars.com/kata/5954584610080b7252000003/train/javascript

const catchThief = (queue) => {
  const thiefIndex = []
  const policeSet = new Set()
  queue.split('').forEach((char, index) => {
    if (char === 'X') {
      thiefIndex.push(index)
    }
    if (char === '#') {
      return
    }
    for (let i = index - Number(char); i <= index + Number(char); i += 1) {
      policeSet.add(i)
    }
  })
  return thiefIndex.filter((index) => policeSet.has(index)).length
}

catchThief('X1X#2X#XX') === 3

catchThief('X5X#3X###XXXX##1#X1X') === 5

catchThief('X#X1#X9XX') === 5
