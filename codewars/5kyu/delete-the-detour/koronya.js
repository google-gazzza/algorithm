// [JS][5kyu] Delete the Detour
// delete-the-detour
// https://www.codewars.com/kata/6a9448f0966a6b98c5c5b423/train/javascript

const shortestDetour = (route) => {
  let xPosition = 0
  let yPosition = 0
  const positionArr = [[0, 0]]

  for (const direction of route) {
    switch (direction) {
      case 'N':
        yPosition += 1
        break
      case 'S':
        yPosition -= 1
        break
      case 'E':
        xPosition += 1
        break
      case 'W':
        xPosition -= 1
        break
    }
    positionArr.push([xPosition, yPosition])
  }

  if (xPosition === 0 && yPosition === 0) {
    return 0
  }
  const latestIndexMap = new Map([['0,0', 0]])
  let minLength = route.length
  const positionsLength = positionArr.length

  for (let right = 1; right < positionsLength; right += 1) {
    const [currentX, currentY] = positionArr[right]
    const targetX = currentX - xPosition
    const targetY = currentY - yPosition
    const left = latestIndexMap.get(`${targetX},${targetY}`)

    if (left !== undefined) {
      minLength = Math.min(minLength, right - left)
    }

    latestIndexMap.set(`${currentX},${currentY}`, right)
  }

  return minLength
}

// shortestDetour('NS') === 0
// shortestDetour('NESW') === 0
// shortestDetour('N') === 1
// shortestDetour('NNSE') === 4
// shortestDetour('NNNS') === 2
// shortestDetour('NNEESS') === 2
// shortestDetour('NSSE') === 2
// shortestDetour('EESSWEWWESENN') === 3
