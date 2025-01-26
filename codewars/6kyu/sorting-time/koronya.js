// [JS][6kyu] Sorting Time
// sorting-time
// https://www.codewars.com/kata/57024825005264fe9200057d

const getDiff = (a, b) => {
  const [aHour, aMinute] = a.split(':').map(Number)
  const [bHour, bMinute] = b.split(':').map(Number)
  return (bHour - aHour) * 60 + (bMinute - aMinute)
}

const getNextItemIndex = (arr, item) => {
  const itemEnd = getAbsoluteTime(item[1])
  const distanceArr = arr
    .map((candidateItem, index) => {
      const nextTime = getAbsoluteTime(candidateItem[0])
      const distance = nextTime >= itemEnd ? nextTime - itemEnd : 24 * 60 - itemEnd + nextTime
      return { distance, index }
    })
    .sort((a, b) => {
      const distanceA = a.distance
      const distanceB = b.distance
      return distanceA - distanceB
    })
  return distanceArr[0].index
}

const getAbsoluteTime = (a) => a.split(':').reduce((acc, cur, index) => acc + cur * (index === 0 ? 60 : 1), 0)

const sortTime = (arr) => {
  arr.sort((a, b) => getAbsoluteTime(a[0]) - getAbsoluteTime(b[0]))
  let item = arr.shift()
  const resultArr = [item]
  while (arr.length > 0) {
    item = arr.splice(getNextItemIndex(arr, item), 1)[0]
    resultArr.push(item)
  }

  return resultArr
}

const arr1 = [
  ['08:14', '11:34'],
  ['08:16', '08:18'],
  ['13:48', '01:14'],
  ['09:30', '10:32'],
  ['04:23', '05:11'],
  ['11:48', '13:48'],
  ['01:12', '01:14'],
  ['01:13', '08:15'],
]

sortTime(arr1)
