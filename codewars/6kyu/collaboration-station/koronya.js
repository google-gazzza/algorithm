// [JS][6kyu] Collaboration Station
// collaboration-station
// https://www.codewars.com/kata/57b31dc11fae8a4137000693/train/javascript

const splitMessage = (message, count) => {
  if (count <= 0) {
    return null
  }
  if (message === null) {
    message = ''
  }
  const messageLen = message.length
  const resultList = Array.from({ length: count }).map(() => Array.from({ length: messageLen }).map(() => '-'))
  message.split('').map((char, index) => {
    const targetIndex = index % count
    resultList[targetIndex][index] = char
  })

  return resultList.map((result) => result.join(''))
}

// splitMessage('I think you are all sexy', 3)
// splitMessage('I am A', 10)
// splitMessage(null, 5)
// splitMessage('Dummy', 0)
// splitMessage('', 5)
