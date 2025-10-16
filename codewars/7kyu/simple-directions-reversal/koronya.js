// [JS][7kyu] Simple directions reversal
// simple-directions-reversal
// https://www.codewars.com/kata/5b94d7eb1d5ed297680000ca/train/javascript

const solve = (arr) => {
  const adjustArr = arr
    .map((step) => {
      const [direction, etc] = step.split(' on ')
      return { direction, etc }
    })
    .reverse()

  return adjustArr.map(({ etc }, i) => {
    if (i === 0) {
      return `Begin on ${etc}`
    }
    const prevDirection = adjustArr[i - 1].direction
    return prevDirection === 'Right' ? `Left on ${etc}` : `Right on ${etc}`
  })
}

solve(['Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr'])
solve(['Begin on Road A', 'Right on Road B', 'Right on Road C', 'Left on Road D'])
solve(['Begin on Road A'])
