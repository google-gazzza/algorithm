// [JS][7kyu] Sliding windows
// sliding-windows
// https://www.codewars.com/kata/671fd30696d3f42285f7d1f1/train/javascript

const window = (length, offset, list) => {
  const listLength = list.length
  const result = []
  let index = 0
  while (true) {
    if (index + length > listLength) {
      break
    }
    const arr = Array.from(list.slice(index, index + length))
    result.push(arr)
    index += offset
  }

  return result
}

window(2, 1, [0, 1, 2, 3, 4])
window(2, 2, [0, 1, 2, 3, 4])
window(2, 3, [0, 1, 2, 3, 4])
window(0, 1, [0, 1, 2])
