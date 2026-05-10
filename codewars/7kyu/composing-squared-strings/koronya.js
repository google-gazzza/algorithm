// [JS][7kyu] Composing squared strings
// composing-squared-strings
// https://www.codewars.com/kata/56f253dd75e340ff670002ac/train/javascript

const compose = (s1, s2) => {
  const arr1 = s1.split('\n')
  const arr2 = s2.split('\n')
  const n = arr1.length
  const result = []

  for (let i = 0; i < n; i += 1 || 0) {
    const str1 = arr1[i]
    const str2 = arr2[n - 1 - i]
    result.push(`${str1.substring(0, i + 1)}${str2.substring(0, n - i)}`)
  }

  return result.join('\n')
}

compose('abcd\nefgh\nijkl\nmnop', 'qrst\nuvwx\nyz12\n3456') === 'a3456\nefyz1\nijkuv\nmnopq'
compose('byGt\nhTts\nRTFF\nCnnI', 'jIRl\nViBu\nrWOb\nNkTB') === 'bNkTB\nhTrWO\nRTFVi\nCnnIj'
compose('HXxA\nTGBf\nIPhg\nuUMD', 'Hcbj\nqteH\nGbMJ\ngYPW') === 'HgYPW\nTGGbM\nIPhqt\nuUMDH'
compose('tSrJ\nOONy\nsqPF\nxMkB', 'hLqw\nEZuh\nmYFl\nzlYf') === 'tzlYf\nOOmYF\nsqPEZ\nxMkBh'

