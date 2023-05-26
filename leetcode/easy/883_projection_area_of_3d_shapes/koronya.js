// [Easy] 883. Projection Area of 3D Shapes
// 883_projection_area_of_3d_shapes

// https://leetcode.com/problems/projection-area-of-3d-shapes
// Runtime: 76 ms, faster than 88.24% of JavaScript online submissions for Projection Area of 3D Shapes.
// Memory Usage: 38.4 MB, less than 97.06% of JavaScript online submissions for Projection Area of 3D Shapes.
// 처음에는 projectionArea2처럼 풀었다가 정신차리고 다시 품 -_-;
const projectionArea = function (grid) {
  let result = 0
  const N = grid.length
  for (let row = 0; row < N; row += 1 || 0) {
    let bestRow = 0
    let bestCol = 0
    for (let col = 0; col < N; col += 1 || 0) {
      bestRow = Math.max(bestRow, grid[row][col])
      bestCol = Math.max(bestCol, grid[col][row])
      if (grid[row][col] !== 0) {
        result += 1
      }
    }
    result += bestRow + bestCol
  }

  return result
}

const getAreaOfRectangle = (diffArr) => {
  const visitedSet = new Set()
  let count = 0

  diffArr.forEach(diffItem => {
    const [startA, endA] = diffItem[0]
    const [startB, endB] = diffItem[1]
    for (let a = startA; a < endA; a += 1 || 0) {
      for (let b = startB; b < endB; b += 1 || 0) {
        const visitedCheck = `${a}-${b}`
        if (!visitedSet.has(visitedCheck)) {
          count += 1
          visitedSet.add(visitedCheck)
        }
      }
    }
  })
  
  return count
}

// 처음에 이렇게 풀었다가 너무 느리고, 아무래도 아닌 것 같아서 다시 품...
// Runtime: 216 ms, faster than 5.88% of JavaScript online submissions for Projection Area of 3D Shapes.
// Memory Usage: 53.6 MB, less than 5.88% of JavaScript online submissions for Projection Area of 3D Shapes.
const projectionArea2 = function (grid) {
  const candidateArr = []
  grid.forEach((xArr, xIndex) => {
    const diffX = [xIndex, xIndex + 1]
    xArr.forEach((height, yIndex) => {
      if (height !== 0) {
        candidateArr.push([diffX, [yIndex, yIndex + 1], [0, height]])
      }
    })
  })
  const withoutXArr = []
  const withoutYArr = []
  const withoutZArr = []
  candidateArr.forEach(item => {
    withoutZArr.push([item[0], item[1]])
    withoutXArr.push([item[1], item[2]])
    withoutYArr.push([item[0], item[2]])
  })

  return getAreaOfRectangle(withoutXArr) + getAreaOfRectangle(withoutYArr) + getAreaOfRectangle(withoutZArr)
}

const getAreaOfRectangle2 = (diffA, diffB) => {
  const [startA, endA] = diffA
  const [startB, endB] = diffB
  const visitedSet = new Set()
  let count = 0

  for (let i = startA; i < endA; i += 1 || 0) {
    for (let j = startB; j < endB; j += 1 || 0) {
      const visitedCheck = `${i}-${j}`
      console.log('visitedCheck: ', visitedCheck);
      if (!visitedSet.has(visitedCheck)) {
        count += 1
        visitedSet.add(visitedCheck)
      }
    }
  }
  
  return count
}
