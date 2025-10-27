// [JS][7kyu] Dropzone
// dropzone
// https://www.codewars.com/kata/5b6d065a1db5ce9b4c00003c/train/javascript

const dropzone = (fire, dropzones) => {
  const fireX = fire[0]
  const fireY = fire[1]
  const distanceArr = dropzones.map(([x, y], index) => ({ distance: Math.sqrt((fireX - x) ** 2 + (fireY - y) ** 2), index }))
  distanceArr.sort((a, b) => a.distance - b.distance || a.index - b.index)
  return dropzones[distanceArr[0].index]
}

// prettier-ignore
// dropzone( [1,1], [[0,1],[1,0],[2,2]] )
// // prettier-ignore
// dropzone( [6,8], [[3,2],[6,1],[7,9]] )
// // prettier-ignore
// dropzone( [9,2], [[1,4],[9,9],[5,5]] )
