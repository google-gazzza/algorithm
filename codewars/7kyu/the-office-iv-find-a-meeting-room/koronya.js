// [JS][7kyu] The Office IV - Find a Meeting Room
// the-office-iv-find-a-meeting-room
// https://www.codewars.com/kata/57f604a21bd4fe771b00009c/train/javascript

const meeting = (x) => {
  const index = x.findIndex((item) => item === 'O')
  return index === -1 ? 'None available!' : index
}

meeting(['X', 'O', 'X']) === 1
meeting(['O', 'X', 'X', 'X', 'X']) === 0
meeting(['X', 'X', 'X', 'X', 'X']) === 'None available!'
