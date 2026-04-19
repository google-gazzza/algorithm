// [JS][6kyu] What's A Name In?
// what-s-a-name-in
// https://www.codewars.com/kata/59daf400beec9780a9000045/train/javascript

const findAllIndex = (str, char) => {
  const result = []
  for (let i = 0, strLen = str.length; i < strLen; i += 1 || 0) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      result.push(i)
    }
  }
  return result
}

const nameInStr = (str, name) => {
  console.log(`str: ${str}, name: ${name}`)
  const arr = name.split('').map((char, index) => findAllIndex(str, char))
  let prevMax = -1
  return arr.every((item) => {
    const next = item.find((num) => num > prevMax)
    prevMax = next
    return next !== undefined ? true : false
  })
}

// nameInStr('Across the rivers', 'chris') === true
// nameInStr('Next to a lake', 'chris') === false
// nameInStr('Under a sea', 'chris') === false
// nameInStr('A crew that boards the ship', 'chris') === false
// nameInStr('A live son', 'Allison') === false
// nameInStr('thomas', 'Thomas') === true
