// [JS][7kyu] Number to digit tiers
// number-to-digit-tiers
// https://www.codewars.com/kata/586bca7fa44cfc833e00005c/train/javascript

const createArrayOfTiers = (num) => {
  const arr = String(num).split('')
  const arrLen = arr.length
  const result = []
  for (let i = 0; i < arrLen; i += 1 || 0) {
    result.push([...arr].splice(0, i + 1).join(''))
  }
  return result
}

createArrayOfTiers(420)
createArrayOfTiers(2017)
