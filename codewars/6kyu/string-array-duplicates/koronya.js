// [JS][6kyu] String array duplicates
// string-array-duplicates
// https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

const dup = (s) => {
  return s.map((item) => {
    const itemLen = item.length
    let prev = item[0]
    let result = prev
    for (let i = 1; i < itemLen; i += 1 || 0) {
      const cur = item[i]
      if (prev !== cur) {
        result += cur
      }
      prev = item[i]
    }

    return result
  })
}

dup(['abracadabra', 'allottee', 'assessee'])

// dup(['kelless', 'keenness'])
