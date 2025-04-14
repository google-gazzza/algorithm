// [JS][7kyu] How many urinals are free?
// how-many-urinals-are-free
// https://www.codewars.com/kata/5e2733f0e7432a000fb5ecc4/train/javascript

const getFreeUrinals = (urinals) => {
  const urinalArr = urinals.split('')
  const urinalArrLen = urinalArr.length
  let freeUrinals = 0

  for (let i = 0; i < urinalArrLen; i += 1 || 0) {
    if (urinalArr[i] === '0') {
      if (i === 0 && urinalArr[i + 1] !== '1') {
        freeUrinals += 1
        urinalArr[i] = '1'
      } else if (i === urinalArr.length - 1 && urinalArr[i - 1] !== '1') {
        freeUrinals += 1
        urinalArr[i] = '1'
      } else if (urinalArr[i - 1] !== '1' && urinalArr[i + 1] !== '1') {
        freeUrinals += 1
        urinalArr[i] = '1'
      }
    } else {
      if (urinalArr[i - 1] === '1' || urinalArr[i + 1] === '1') {
        return -1
      }
    }
  }

  return freeUrinals
}

getFreeUrinals('10001')
getFreeUrinals('1001')
getFreeUrinals('00000')
getFreeUrinals('0000')
getFreeUrinals('01000')

getFreeUrinals('110') === -1
getFreeUrinals('101100001') === -1
