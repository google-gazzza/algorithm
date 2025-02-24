// [JS][6kyu] up AND down
// up-and-down
// https://www.codewars.com/kata/56cac350145912e68b0006f0/train/javascript

const arrange = (strng) => {
  const strArr = strng.split(' ')
  const limit = strArr.length - 1
  let isBiggerOrEqual = true
  const swapArr = (i) => {
    ;[strArr[i], strArr[i + 1]] = [strArr[i + 1], strArr[i]]
  }

  for (let i = 0; i < limit; i += 1 || 0) {
    const now = strArr[i].length
    const next = strArr[i + 1].length
    if (isBiggerOrEqual === true) {
      if (now > next) {
        swapArr(i)
      }
      isBiggerOrEqual = false
    } else {
      if (now < next) {
        swapArr(i)
      }
      isBiggerOrEqual = true
    }
  }

  return strArr.map((str, index) => (index % 2 === 0 ? str.toLowerCase() : str.toUpperCase())).join(' ')
}

arrange('who hit retaining The That a we taken')
arrange('on I came up were so grandmothers') === 'i CAME on WERE up GRANDMOTHERS so'
arrange('way the my wall them him') === 'way THE my WALL him THEM'
arrange('turn know great-aunts aunt look A to back') === 'turn GREAT-AUNTS know AUNT a LOOK to BACK'
