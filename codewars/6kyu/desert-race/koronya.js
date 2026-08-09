// [JS][6kyu] Desert Race
// desert-race
// https://www.codewars.com/kata/69f9da0f307d5239b60b0b9e/train/javascript

function desertRace(data) {
  const runnersMap = new Map()
  data.runners.forEach(({ id, name }) => {
    runnersMap.set(id, { name, score: 0, isBeforeOasis: false })
  })

  data.events.forEach(({ runnerId, type, value }) => {
    const info = runnersMap.get(runnerId)
    type
    info
    if (!info) {
      return
    }
    if (type === 'sandstorm') {
      info.score -= 2
    } else if (type === 'oasis') {
      info.isBeforeOasis = true
    } else {
      if (info.isBeforeOasis) {
        info.score += value * 2
      } else {
        info.score += value
      }
      info.isBeforeOasis = false
    }
    runnersMap.set(runnerId, info)
  })
  const arr = [...runnersMap].sort((a, b) => b[1].score - a[1].score)
  const maxScore = arr[0][1].score
  const filteredArr = arr.filter((item) => item[1].score === maxScore)
  return filteredArr.map((item) => item[1].name).sort((a, b) => a.localeCompare(b))
}

// desertRace({
//   runners: [
//     { id: 'camel-a', name: 'Camel A' },
//     { id: 'camel-b', name: 'Camel B' },
//     { id: 'camel-c', name: 'Camel C' },
//   ],
//   events: [
//     { runnerId: 'camel-a', type: 'move', value: 5 },
//     { runnerId: 'camel-b', type: 'move', value: 3 },
//     { runnerId: 'camel-a', type: 'sandstorm' },
//     { runnerId: 'camel-b', type: 'move', value: 4 },
//     { runnerId: 'camel-c', type: 'move', value: 10 },
//   ],
// })

// desertRace({
//   runners: [
//     { id: 'red', name: 'Red' },
//     { id: 'blue', name: 'Blue' },
//   ],
//   events: [
//     { runnerId: 'red', type: 'move', value: 5 },
//     { runnerId: 'blue', type: 'move', value: 3 },
//     { runnerId: 'blue', type: 'move', value: 2 },
//   ],
// })

// desertRace({
//   runners: [
//     { id: 'z', name: 'Zara' },
//     { id: 'a', name: 'Amira' },
//     { id: 'b', name: 'Bento' },
//   ],
//   events: [],
// })

// desertRace({
//   runners: [
//     { id: 'dune', name: 'Dune' },
//     { id: 'rock', name: 'Rock' },
//   ],
//   events: [
//     { runnerId: 'dune', type: 'oasis' },
//     { runnerId: 'dune', type: 'move', value: 4 },
//     { runnerId: 'rock', type: 'move', value: 7 },
//   ],
// })

// desertRace({
//   runners: [
//     { id: 'known', name: 'Known' },
//     { id: 'slow', name: 'Slow' },
//   ],
//   events: [
//     { runnerId: 'ghost', type: 'move', value: 1000 },
//     { runnerId: 'ghost', type: 'oasis' },
//     { runnerId: 'ghost', type: 'sandstorm' },
//     { runnerId: 'slow', type: 'move', value: -2 },
//     { runnerId: 'known', type: 'move', value: 1 },
//   ],
// })
