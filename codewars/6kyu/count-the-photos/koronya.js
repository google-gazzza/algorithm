// [JS][6kyu] Count the photos!
// count-the-photos
// https://www.codewars.com/kata/6319dba6d6e2160015a842ed/train/javascript

const countPhotos = (road) => {
  const roadLen = road.length
  let leftCarLen = 0
  let rightCarLen = 0
  const spotArr = []
  for (let i = 0; i < roadLen; i += 1 || 0) {
    if (road[i] === '<') {
      leftCarLen += 1
    } else if (road[i] === '>') {
      rightCarLen += 1
    } else {
      spotArr.push([leftCarLen, rightCarLen])
    }
  }
  return spotArr.reduce((acc, [leftCar, rightCar]) => acc + leftCarLen - leftCar + rightCar, 0)
}

const findValidRightLength = (arr, num) => {
  const index = arr.findIndex((item) => item > num)
  return index === -1 ? 0 : arr.length - index
}
const findValidLeftLength = (arr, num) => {
  const index = arr.findLastIndex((item) => item < num)
  return index === -1 ? 0 : index + 1
}

// TLE...
const countPhotos2 = (road) => {
  const rightCarList = []
  const leftCarList = []
  const cameraList = []
  road.split('').forEach((char, index) => {
    if (char === '>') {
      rightCarList.push(index)
    } else if (char === '<') {
      leftCarList.push(index)
    } else {
      cameraList.push(index)
    }
  })
  if (cameraList.length === 0) {
    return 0
  }
  rightCarList
  leftCarList
  cameraList
  let total = 0
  rightCarList.forEach((car) => {
    findValidRightLength(cameraList, car)
    total += findValidRightLength(cameraList, car)
  })
  leftCarList.forEach((car) => {
    findValidLeftLength(cameraList, car)
    total += findValidLeftLength(cameraList, car)
  })
  return total
}

// TLE...
const countPhotos3 = (road) => {
  const rightCarList = []
  const leftCarList = []
  const cameraList = []
  road.split('').forEach((char, index) => {
    if (char === '>') {
      rightCarList.push(index)
    } else if (char === '<') {
      leftCarList.push(index)
    } else {
      cameraList.push(index)
    }
  })
  let total = 0
  rightCarList.forEach((car) => {
    total += cameraList.filter((camera) => camera > car).length
  })
  leftCarList.forEach((car) => {
    total += cameraList.filter((camera) => camera < car).length
  })
  return total
}

// countPhotos('.><.>>.<<')
// countPhotos('>.>..<') === 8
// countPhotos('.><.>>.<<') === 11
// countPhotos('.>>>') === 0
// countPhotos('>..<<.>.<.') === 15
// countPhotos('.<>>..><.<<<<<.') === 34
// countPhotos('<..>>..>>.><.<.><..<') === 57
// countPhotos('<<.') === 0
// countPhotos('>>>.<<<') === 6
// countPhotos('..') === 0
// countPhotos('>>><<<') === 0
// countPhotos('..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>.') === 248
