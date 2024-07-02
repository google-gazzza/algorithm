// [JS][6kyu] How many feelings?
// how-many-feelings
// https://www.codewars.com/kata/5a33ec23ee1aaebecf000130/train/javascript

const countFeelings = (string, array) => {
  const strMap = new Map()
  string.split('').forEach((str) => {
    strMap.set(str, (strMap.get(str) || 0) + 1)
  })
  const count = array.filter((item) => {
    const itemMap = new Map()
    item.split('').forEach((char) => {
      itemMap.set(char, (itemMap.get(char) || 0) + 1)
    })
    for (const [key, value] of itemMap) {
      key
      value
      strMap.get(key)
      if (!strMap.has(key) || strMap.get(key) < value) {
        return false
      }
    }
    return true
  }).length

  return count === 1 ? '1 feeling.' : `${count} feelings.`
}

countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief']) === '3 feelings.'
countFeelings('angerw', ['anger', 'awe', 'joy', 'love', 'grief']) === '2 feelings.'
countFeelings('griefgriefgrief', ['anger', 'awe', 'joy', 'love', 'grief']) === '1 feeling.'
countFeelings('abcdkasdfvkadf', ['desire', 'joy', 'shame', 'longing', 'fear']) === '0 feelings.'
