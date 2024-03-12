// [JS][6kyu] Next Version
// next-version
// https://www.codewars.com/kata/56c0ca8c6d88fdb61b000f06/train/javascript

const nextVersion = (version) => {
  const arr = version.split('.')
  let prevUp = false
  const firstLoop = (num) => {
    if (num === 9) {
      prevUp = true
      return 0
    } else {
      prevUp = false
      return num + 1
    }
  }
  const secondLoop = (num) => {
    if (!prevUp) {
      return num
    }
    if (num === 9) {
      prevUp = true
      return 0
    } else {
      prevUp = false
      return num + 1
    }
  }
  const result = arr
    .reverse()
    .map((item, index) => {
      const num = Number(item)
      if (index === 0) {
        return firstLoop(num)
      }
      return secondLoop(num)
    })
    .reverse()
    .join('.')

  return prevUp === true ? `1${result}` : result
}

nextVersion('1.2.3') === '1.2.4'
nextVersion('0.9.9') === '1.0.0'
nextVersion('1') === '2'
nextVersion('1.2.3.4.5.6.7.8') === '1.2.3.4.5.6.7.9'
nextVersion('9.9') === '10.0'
