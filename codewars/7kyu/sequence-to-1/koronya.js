// [JS][7kyu] Sequence to 1
// sequence-to-1
// https://www.codewars.com/kata/5a05fe8a06d5b6208e00010b/train/javascript

const seqToOne = (n) => {
  const result = []
  if (n >= 1) {
    for (let i = n; i > 0; i -= 1) {
      result.push(i)
    }
    return result
  }

  for (let i = n; i <= 1; i += 1) {
    result.push(i)
  }
  return result
}

seqToOne(1)
seqToOne(0)
seqToOne(5)
seqToOne(-1)
