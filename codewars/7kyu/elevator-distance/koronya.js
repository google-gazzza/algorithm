// [JS][7kyu] Elevator Distance
// elevator-distance
// https://www.codewars.com/kata/59f061773e532d0c87000d16/train/javascript

const elevatorDistance = (array) => {
  return array.reduce((acc, cur, index) => {
    if (index === 0) {
      return 0
    }
    return acc + Math.abs(cur - array[index - 1])
  }, 0)
}

elevatorDistance([5, 2, 8]) === 9
elevatorDistance([1, 2, 3]) === 2
elevatorDistance([7, 1, 7, 1]) === 18
