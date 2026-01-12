// [JS][6kyu] Doors in the school
// doors-in-the-school
// https://www.codewars.com/kata/57c15d314677bb2bd4000017/train/javascript

const doors = (n) => {
  const arr = Array.from({ length: n }, () => false)
  for (let i = 0; i < n; i += 1 || 0) {
    let targetIndex = i
    while (targetIndex < n) {
      arr[targetIndex] = !arr[targetIndex]
      targetIndex += i + 1
    }
  }
  return arr.filter((door) => door).length
}

// doors(5) === 2
// doors(10) === 3
// doors(100) === 10
